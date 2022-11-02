# [Grabacion]()

## https://linkerd.io/2.11/getting-started/

-------------

# Linkerd
```
curl -fsL https://run.linkerd.io/install | sh

linkerd check --pre
```

## Path

Exportar la ruta que les indique. Ej.
```
export PATH=$PATH:$HOME/.linkerd2/bin
```

## Credenciales
```
linkerd install --crds | kubectl apply -f -

linkerd install | kubectl apply -f -
```

## Instalar Dashboard
```
linkerd viz install | kubectl apply -f -
```

## Inyectar Deployments

```
kubectl -n <my_namespace> get deploy -o yaml | linkerd inject - | kubectl apply -f -
```

## Ingresar al Dashboard
```
linkerd viz dashboard
```
