import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {Error} from 'tslint/lib/error';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private url = 'http://localhost:3000/books';
  constructor(private http: HttpClient ) {}
  // все современные хттп клиенты возвращают обсерабле
  addBook(book: Book): Observable<Book> { // добавить книгу
    // PIPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    return this.http.post<Book>(this.url, book).pipe(catchError(this.errorHandler));
  }
  getBooks(criteria?: string): Observable<Book[]> {
    const additional = criteria ? criteria : ''; // критерий поиска
    return this.http.get<Book[]>(this.url + additional).pipe(catchError(this.errorHandler));
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book> (`${this.url}/${id}`).pipe(catchError(this.errorHandler)); // могут быть экскепшены
  }
  removeBook(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
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
