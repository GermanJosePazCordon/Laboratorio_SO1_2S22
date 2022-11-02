import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
 
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  create(data : any){
    console.log(data)
    return this.httpClient.post(environment.URL + 'create', data);
  }

  read() {
    return this.httpClient.get(environment.URL + 'read');
  }

  update(data : any){
    console.log(data)
    return this.httpClient.post(environment.URL + 'update', data);
  }


  delete(data : any){
    console.log(data)
    return this.httpClient.post(environment.URL + 'delete', data);
  }
  
  filter(data : any){
    console.log(data)
    return this.httpClient.post(environment.URL + 'filter', data);
  }
}
