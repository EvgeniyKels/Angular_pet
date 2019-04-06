import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Serverok} from '../httprequest.component';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url = 'https://my-awesome-project-9e3ca.firebaseio.com/data.json';
  private url2 = 'https://my-awesome-project-9e3ca.firebaseio.com/Test.jsoxn';
  constructor(private http: HttpClient) {

  }
  storeService(services: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url, services, {headers}).pipe(catchError(this.errorHandler));
  }
  storePutService(services: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.url, services, {headers}).pipe(catchError(this.errorHandler));
  }
  getServers() {
    return this.http.get<Serverok[]>(this.url).pipe(catchError(this.errorHandler));
  }

  getAppName() {
    return this.http.get<Serverok[]>(this.url2).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (!error.status) {
      return throwError('server unavailable');
    }
    const res = {
      message: error.error.toString().substr(0, 30),
      status: error.status,
      toString: () => `${res.message}${res.status}`
    };
    return throwError(res);
  }
}
