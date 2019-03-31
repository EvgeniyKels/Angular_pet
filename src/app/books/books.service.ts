import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {Error} from 'tslint/lib/error';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private url = 'http://localhost:3000/books';
  constructor(private http: HttpClient ) {}
  // все современные хттп клиенты возвращают обсерабле
  addBook(book: Book): Observable<Book> { // добавить книгу
    return this.http.post<Book>(this.url, book);
  }
  getBooks(criteria?: string): Observable<Book[]> {
    const additional = criteria ? criteria : ''; // критерий поиска
    return this.http.get<Book[]>(this.url + additional);
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book> (`${this.url}/${id}`); // могут быть экскепшены
  }
  removeBook(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError('server unavailable');
    }
    const res = {
      message: error.error.toString().substr(0, 30),
      status: error.status
    };
    return throwError(res);
  }
}
