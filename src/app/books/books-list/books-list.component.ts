import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
 books$: Observable<Book[]>
  constructor(private service: BooksService) { }

  ngOnInit() {
    this.books$ = this.service.getBooks();
  }
  toString(book: Book): string {
    return `${book.id} ${book.title} ${book.author} ${book.feedback} ${book.cover}`
  }

  remove(book: Book) {
    this.service.removeBook(book.id).subscribe(() => this.ngOnInit());
  }
}
