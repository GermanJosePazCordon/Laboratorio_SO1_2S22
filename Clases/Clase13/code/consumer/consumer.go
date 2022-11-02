package main

import (
	"context"
	"fmt"
	"time"

	"github.com/segmentio/kafka-go"
)

func main() {
	conn, _ := kafka.DialLeader(context.Background(), "tcp", "172.17.0.3:9092", "topic_test", 0)
	conn.SetWriteDeadline(time.Now().Add(time.Second * 3))

	batch := conn.ReadBatch(1e3, 1e6) // 1 - 1000
	bytes := make([]byte, 1e3)
	for {
		_, err := batch.Read(bytes)
		if err != nil {
			break
		}
		fmt.Println(string(bytes))
	}
}
