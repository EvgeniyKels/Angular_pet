import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BooksService} from '../books.service';
import {Book} from '../book';
import {BookValidators} from '../book-validators';
import {BooksListComponent} from '../books-list/books-list.component';

@Component({
  selector: 'app-books-form', templateUrl: './books-form.component.html', styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(), title: new FormControl(), author: new FormControl(), cover: new FormControl(), feedback: new FormControl()
  });
  // form должен видеть list
  @Input() booksList: BooksListComponent;

  constructor(private service: BooksService) {
  }
  // get id() {
  //   return this.form.get('id');
  // }

  ngOnInit() {
  }
// два типа ошибок экспектед и анэкспектед
// как можно больше вещей надо проверять еще до сабмита
// вместо эрора можно передать все что угодно, не только вывод эрора
  submitForm() {
    const book = this.form.value as Book;
    // если мы делаем какой-то обработчик ошибок -> мы должны работать с PIPE до сабскрайбинга
    // на сабскрайбинге мы поймать эксепшн уже не сможем поэтому должны 'врезаться' перед ним
    this.service.addBook(book).subscribe(() => {
      this.booksList.ngOnInit();
      this.form.reset();
    }, error => alert(error));
  }
}
