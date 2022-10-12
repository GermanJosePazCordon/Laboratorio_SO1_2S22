# GCloud SDK

## Instalar

FROM: https://cloud.google.com/sdk/docs/quickstart#deb

### Ubuntu
Utilizar comando uno por uno. 
```
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-367.0.0-linux-x86_64.tar.gz
```
```
tar zxvf google-cloud-sdk-367.0.0-linux-x86_64.tar.gz
```
```
./google-cloud-sdk/install.sh
```
Luego de ejecutarlos todos cerrar y abrir una terminal nueva.

-----------
## Configurar gcloud sdk
```
gcloud init
```
Configurar el proyecto y la region por defecto. Utilizar el id de su proyecto.
```
gcloud config set project so1-2s22
```
```
gcloud config set compute/zone us-central1-a
```
-----------
## Instalar Kubectl
```
gcloud components install kubectl
```

-----------
## Creacion de cluster de kubernetes

Nombre del cluster: k8s-demo

Numero de nodos(1): --num-nodes=1

Tipo de VM (2 CPUs, 8GB RAM): --machine-type=n1-standard-2

Nota: Requerimientos minimos 2 CPUs y 4GB RAM, y 3 nodos

Networks rules (allin, allout): --tags=allin,allout

Autenticacion con certificado: --enable-legacy-authorization --issue-client-certificate

Habilitar el escalado automatico (Minimo de nodos 1 y maximo 3): --enable-autoscaling --min-nodes=1 --max-nodes=3
```
gcloud container clusters create k8s-demo --num-nodes=1 --tags=allin,allout --enable-legacy-authorization --issue-client-certificate --preemptible --machine-type=n1-standard-2
```

-----------
## Obtener credenciales para Kubectl

Entrar en la página de GCP a la configuración del cluster, luego presionar el botón Connect y copiar y pegar la conexión en una terminal. Ejemplo
```
gcloud container clusters get-credentials k8s-demo --zone us-central1-a --project so1-2s22
```

-----------
## Comanodos utiles de kubectl

Listar los nodos
```
kubectl get nodes
```
#Listar los namespaces
```
kubectl get namespaces
```
Listar los pods
```
kubectl get pods
```
Servicios
```
kubectl get services -n <nombre_servicio>
kubectl delete services -n <nombre_servicio>
```
Deployments
```
kubectl get deployments -n <nombre_deployment>
kubectl delete deployments -n <nombre_deployment>
```
---------
## Archivos de configuracion de Kubernetes
```
kubectl get [nodes|deployments|services|pods] nombre -o yaml > pod.yaml
kubectl create -f archivo.yaml
kubectl delete -f archivo.yaml
kubectl apply -f archivo.yaml
```
---------
## Monitoreo
```
kubectl logs -f pod/name
kubectl logs -f deployment/name
kubectl describe deployments name
```


