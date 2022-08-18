# [Grabacion](https://drive.google.com/file/d/1g5txmsLsFLPVjde-6xthGp-LZ73TZ1fZ/view?usp=sharing)

-----------
# [Instalar Go](https://www.digitalocean.com/community/tutorials/how-to-install-go-on-ubuntu-20-04)

## Go
```
go version
```
Si funciona y pueden ver la version quiere decir que está correctamente instalado y ya pueden empezar a utilizarlo.

## Go Mod

```
go mod init <<nombre_modulo>>
go mod tidy

ejemplo utilizado : go mod init main.go
```

## Gorilla Mux

```
go get github.com/gorilla/mux
```

## Mongo-driver

```
go get go.mongodb.org/mongo-driver
```

## Ejecutar Go
```
go run <<nombre_archivo>>

ejemplo: go run main.go
```

## Curl
```
sudo apt update

sudo apt install curl

curl --version
```

## Curl GET
```
curl -X GET https://example.com
```

## Curl POST
```
curl -H 'Content-Type: application/json' -d '{json}' https://example.com
```
