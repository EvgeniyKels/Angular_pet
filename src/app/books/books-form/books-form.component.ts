import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../books.service';
import {Book} from '../book';
import {BookValidators} from '../book-validators';
import {BooksListComponent} from '../books-list/books-list.component';
import {BooksValidators} from '../books-validator';

@Component({
  selector: 'app-books-form', templateUrl: './books-form.component.html', styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('', Validators.required, BooksValidators.uniqueId),
    title: new FormControl(),
    author: new FormControl(),
    cover: new FormControl(),
    feedback: new FormControl()
  });
  // form должен видеть list
  @Input() booksList: BooksListComponent;

  constructor(private service: BooksService) {
  }
  // get id() {
  //   return this.form.get('id');
  // }

  ngOnInit() {
    BooksValidators.booksService = this.service;
  }
// два типа ошибок экспектед и анэкспектед
// как можно больше вещей надо проверять еще до сабмита
// вместо эрора можно передать все что угодно, не только вывод эрора
  submitForm() {
    const book = this.form.value as Book;
    // если мы делаем какой-то обработчик ошибок -> мы должны работать с PIPE до сабскрайбинга
    // на сабскрайбинге мы поймать эксепшн уже не сможем поэтому должны 'врезаться' перед ним
    // BooksService смотри в этом TS
    this.service.addBook(book).subscribe(() => {
      this.booksList.ngOnInit();
      this.form.reset();
    }, error => alert(error.message));
  }
}
