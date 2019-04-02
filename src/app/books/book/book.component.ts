import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
book$: Observable<Book>;
  constructor(private service: BooksService) {}

  ngOnInit() {
    this.book$ = this.service.getBook(50505);
  }

}
