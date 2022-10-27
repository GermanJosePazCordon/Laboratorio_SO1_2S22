package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/segmentio/kafka-go"
)

type User struct {
	Name   string `json:"name"`
	Carnet string `json:"carnet"`
}

func write(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	var usr User
	json.NewDecoder((request.Body)).Decode(&usr)

	conn, _ := kafka.DialLeader(context.Background(), "tcp", "172.17.0.3:9092", "topic_test", 0)
	conn.SetWriteDeadline(time.Now().Add(time.Second * 10))
	conn.WriteMessages(kafka.Message{Value: []byte("{\"name\":\"" + usr.Name + "\",\"carnet\":" + usr.Carnet + "}")})

	json.NewEncoder(response).Encode("Escribiendo en kafka")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/write", write).Methods("POST")
	fmt.Println("Server on port", 8000)
	err := http.ListenAndServe(":8000", router)
	if err != nil {
		fmt.Println(err)
	}
}
