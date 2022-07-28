# Clase 2


## [Grabacion](https://drive.google.com/file/d/1EEAXVLZZxtj55JzB0ngBb18NEUcPdMCQ/view?usp=sharing)
----------


```
sudo apt-get update
```

## Instalar docker

```
sudo apt install docker.io
```

## Instalar dependencias de docker

```
sudo snap install docker

docker --version
```

## Ejecutar una imagen

```
sudo docker run -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

## Ejecutar una imagen visualizando mensajes en consola

```
sudo docker run -it -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

## Ver las imagenes descargadas

```
sudo docker images
```

## Ver todos los contenedores

```
sudo docker ps -a
```

## Ver todos los contenedores activos

```
sudo docker ps
```

## Crear imagen

```
sudo docker build -t <<nombre imagen>> .
```

## Subir una imagen a DockerHub
```
sudo docker build -t <<nombre de usuario>>/<<nombre de la imagen>> .

sudo docker push <<nombre de usuario>>/<<nombre de la imagen>>
```

## Bajar una imagen a DockerHub
```
sudo docker pull <<nombre de usuario>>/<<nombre de la imagen>>
```

## Eliminar todas las imagenes, contenedores y volumenes.

```
sudo docker system prune -a
```

## Eliminar un contenedir especifico.

```
sudo docker rm <<ID container>>
```

## Eliminar una imagen especifica.

```
sudo docker rmi <<ID image>>
```
