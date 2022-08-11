# [Grabacion](https://drive.google.com/file/d/1KZ507UlwDO3VBZpZCUxu3vH1zZ2ihooK/view?usp=sharing)

-----------
# Docker Compose

## Construir imagenes

```
docker-compose build
```

## Levantar contenedores

```
docker-compose up -d
```
Si no se han construido las imaganes se puede agregar --build al final para que las contruya y luego levante los contenedores.

## Detener contenedores

```
docker-compose down
```

## Si el archivo .yml no se llama "docker-compose"

```
docker-compose -f <nombre_archivo.yml> up -d
docker-compose -f <nombre_archivo.yml> down
```
