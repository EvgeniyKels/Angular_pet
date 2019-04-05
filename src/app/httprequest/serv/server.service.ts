import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url = 'https://my-awesome-project-9e3ca.firebaseio.com/data.json';
  constructor(private http: HttpClient) {

  }
  storeService(services: any[]) {
    return this.http.post(this.url, services);
  }
}
