import time
from locust import HttpUser, task
import json
import random

class QuickstartUser(HttpUser):
    casos = []
    with open('traffic.json') as json_file:
        data = json.load(json_file)
        casos.extend(data)

    @task
    def insercion_caso(self):
        time.sleep(1)
        response = self.client.post("/add-caso",json=random.choice(self.casos))
        json_response_dict = response.json()
        print(response.json())
       