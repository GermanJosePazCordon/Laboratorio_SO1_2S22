package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	Name   string `json:"name,omitempty"`
	Carnet string `json:"carnet,omitempty"`
	Time   string `json:"time,omitempty"`
}

var client *mongo.Client

//Enpoints
func createUser(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	var usr User
	json.NewDecoder((request.Body)).Decode(&usr)
	loc, _ := time.LoadLocation("America/Guatemala")
	t := time.Now().In(loc).Format("2006-01-02 15:04:05")
	usr.Time = t
	colletion := client.Database("goDB").Collection("user")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	result, _ := colletion.InsertOne(ctx, usr)
	json.NewEncoder(response).Encode(result)
}

func getUser(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	var listUsr []User
	colletion := client.Database("goDB").Collection("user")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := colletion.Find(ctx, bson.M{})
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var usr User
		cursor.Decode(&usr)
		listUsr = append(listUsr, usr)
	}
	json.NewEncoder(response).Encode(listUsr)
}

func main() {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, _ = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://172.17.0.2:27017"))
	router := mux.NewRouter()
	router.HandleFunc("/create", createUser).Methods("POST")
	router.HandleFunc("/get", getUser).Methods("GET")
	fmt.Println("Server on port", 8000)
	http.ListenAndServe(":8000", router)
	defer client.Disconnect(ctx)
}
