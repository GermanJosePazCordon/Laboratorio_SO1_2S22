import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  create(data : any){
    console.log(data)
    return this.httpClient.post('http://localhost:3000/create', data);
  }

  read() {
    return this.httpClient.get('http://127.0.0.1:3000/read');
  }

  update(data : any){
    console.log(data)
    return this.httpClient.post('http://localhost:3000/update', data);
  }


  delete(data : any){
    console.log(data)
    return this.httpClient.post('http://localhost:3000/delete', data);
  }
  
  filter(data : any){
    console.log(data)
    return this.httpClient.post('http://localhost:3000/filter', data);
  }
}
