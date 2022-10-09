# from locust import HttpUser, task
# class ExampleTest(HttpUser):

#     @task
    
#     # def read(self):
#     #     self.client.get("/read")
    
#     def user(self):
#         self.client.post("/user", {"name":"German", "carnet":201902934})

import json
from random import randrange
from locust import HttpUser, between, task

debug = False

def printDebug(txt):
    if debug:
        print(txt)

class readFile():
    def __init__(self):
        self.data = []

    def getData(self): #Metodo donde se obtiene un elemento de la lista de registros
        size = len(self.data) #Tamaño de los datos
        if size > 0:
            index = randrange(0, size - 1) if size > 1 else 0
            return self.data.pop(index)
        else:
            print("size -> 0")
            return None
    
    def loadFile(self):
        print("LOADING ...")
        try:
            with open("traffic2.json", 'r') as file:
                self.data = json.loads(file.read())
        except Exception:
            print(f'Error : {Exception}')

class trafficData(HttpUser):
    wait_time = between(0.1, 0.9) #Tiempo de espera entre registros
    reader = readFile()
    reader.loadFile()

    def on_start(self):
        print("On Start")
    
    @task
    def sendMessage(self):
        data = self.reader.getData() #Registro obtenido de la lista
        if data is not None:
            send = json.dumps(data)
            printDebug(send)
            res = self.client.post("/user", json=data)
            response = res.json()
            print(response)
        else:
            print("Empty") #No hay mas datos por enviar
            self.stop(True)
    
    @task
    def getMessage(self):
        self.client.get("/read")