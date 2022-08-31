package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type User struct {
	Name   string `json:"name"`
	Carnet int    `json:"carnet"`
}

var conn = MySQLConn()

func MySQLConn() *sql.DB {
	connString := "root:root@tcp(23.251.159.100:3306)/dbclase6"
	conn, err := sql.Open("mysql", connString)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Conn MySQL")
	}
	return conn
}

func getUser(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	var listUsr []User
	query := "SELECT * FROM User;"
	result, err := conn.Query(query)
	if err != nil {
		fmt.Println(err)
	}
	for result.Next() {
		var usr User
		err = result.Scan(&usr.Name, &usr.Carnet)
		if err != nil {
			fmt.Println(err)
		}
		listUsr = append(listUsr, usr)
	}
	json.NewEncoder(response).Encode(listUsr)
}

func createUser(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	var usr User
	json.NewDecoder((request.Body)).Decode(&usr)
	query := `INSERT INTO User(name, carnet) VALUES (?,?);`
	result, err := conn.Exec(query, usr.Name, usr.Carnet)
	if err != nil {
		fmt.Println(err)
	}
	json.NewEncoder(response).Encode(result)
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/create", createUser).Methods("POST")
	router.HandleFunc("/get", getUser).Methods("GET")
	fmt.Println("Server on port", 8000)
	err := http.ListenAndServe(":8000", router)
	if err != nil {
		fmt.Println(err)
	}
}
