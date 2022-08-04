# [Grabacion](https://drive.google.com/file/d/1qL6wofwIwlIzkzXmTOlhAJOVeJM1lRVQ/view?usp=sharing)

-----------
# Utilizar MongoDB con Docker Volumen

## Imagen de mongo

```
sudo docker pull mongo

```

## Docker run

```
sudo docker run -d -p <<port>>:27017 -v <<ruta destino>>:/data/db --name <<nombre>> mongo

```
Mongo utiliza el puerto 27017 por defecto. Para persistencia de datos especificar la ruta donde guardar los datos.

## Conectarse a un contenedor
```
sudo docker exec -it  <<nombre o id del container>> bash

mongo

```
Luego de conectarse al contenedor con mongo, escribir "mongo", de esta manera ya se puede utilizar sintaxis de mongo para crear bases, colecciones y demás cosas. [Ejemplos basicos](https://www.mongodb.com/basics/examples)

  
## Eliminar contenedores al mismo tiempo

```
sudo docker rm $(sudo docker ps -aq) -f
```
