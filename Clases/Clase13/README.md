# [Grabacion](https://drive.google.com/file/d/1Ll-v29VlFLwl9TJaiLybOBUNeOPndgt_/view?usp=sharing)

## https://kafka.apache.org/quickstart

-------------

# Kafka con Docker

Levantar contenedores con ubuntu. Uno para el Zookeeper y otro por cada Broker a utilizar.

## Instalar Ubuntu
```
docker pull ubuntu
docker run -it ubuntu
```

## Verificar ip
```
cat /etc/hosts
```

## Instalar nano, openjdk-8-jdk y wget
```
apt update
apt install -y nano openjdk-8-jdk wget
```

## Descargar kafka
```
wget https://dlcdn.apache.org/kafka/3.3.1/kafka_2.13-3.3.1.tgz
tar -xzf kafka_2.13-3.3.1.tgz
```

## Configurar Zookeeper
```
nano kafka_2.13-3.3.1/config/zookeeper.properties
mkdir zookeeper-data
```

## Iniciar el servicio de ZooKeeper
```
kafka_2.13-3.3.1/bin/zookeeper-server-start.sh kafka_2.13-3.3.1/config/zookeeper.properties
```

## Configurar Broker
```
nano kafka_2.13-3.3.1/config/server.properties
```

### Dentro de la configuración del Broker editar los siguientes datos:

```
broker.id=<no_broker>
```
Tomar en cuenta que el Broker 0 es el del Zookeeper.

```
zookeeper.connect=<ip_zookeeper>:2181
```
```
listeners=PLAINTEXT://<ip_broker>:9092
```

## Iniciar el servicio del Broker
```
kafka_2.13-3.3.1/bin/kafka-server-start.sh kafka_2.13-3.3.1/config/server.properties
```
------------
# Comandos de Kafka

Ejecutar estos comandos en una terminal aparte.

```
cd kafka_2.13-3.3.1
```

## Crear topic de kafka
```
bin/kafka-topics.sh --create --topic topic_test --bootstrap-server localhost:9092
bin/kafka-topics.sh --describe --topic topic_test --bootstrap-server localhost:9092
```

## Escribir en el topic
```
bin/kafka-console-producer.sh --topic topic_test --bootstrap-server localhost:9092
```

## Leer el topic
```
bin/kafka-console-consumer.sh --topic topic_test --from-beginning --bootstrap-server localhost:9092
```
-------------
# Integración con Go

## Instalar kafka-go
```
go get github.com/segmentio/kafka-go
```
