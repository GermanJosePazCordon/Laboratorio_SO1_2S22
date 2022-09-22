# [Grabacion](https://drive.google.com/file/d/1JxDO-KwnmjPbcZF2xIwO9qmMKJ9ZyTg8/view?usp=sharing)

-----------

## Angular

Si no saben el nombre de su aplicación utilizar el comando `ng build --prod`. Dentro de la carpeta dist estará su aplicación.


## Container Registry

### Paso 1.
Hacer pull de la imagen desde DockerHub
```
docker pull <<username>>/<<image_name>>
```
Ej:
```
docker pull germanjosepazcordon/front-clase9
```

### Paso 2.
Agregarle tag a la imagen.
```
docker tag <<imagen>> gcr.io/<ID>/<nombre>:<version>
```
Ej:
```
docker tag germanjosepazcordon/front-clase9 gcr.io/so1-2s22/clase9:V1
```

### Paso 3.
Hacer push de la imagen tageada
```
docker push <<imagen>>
```
Ej:
```
docker push gcr.io/so1-2s22/front-clase9:V1
```