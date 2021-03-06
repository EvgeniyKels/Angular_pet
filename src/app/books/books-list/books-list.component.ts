import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
  // в конце переменной $ так как абсерабле. Абсерабле - частный случай стрима
  // Хттп модуль - рест апи и все его методы возвращают абсерабле
  // сабскрайб
  // OnInit - когда все выполняется и строится готоыфйй компонент выполняется метод он инит
  // жизненный цикл компонента
  // если я хочу поменять реализацию сервисного класса я могу унаследоваться от старого
  // сервисного класса и поменять в апп модуль провайд класс
  // функция вызывается по сабскрайбу
  // пайп ассинк для сабскрайбинга и абсабскрайбинга абсерабле
  // обсерабле - ничего нет пока не сабскрайбинг
  books$: Observable<Book[]>;

  constructor(private service: BooksService) {
  }

  ngOnInit() {
    console.log('onInitCall');
    this.getBooks();
  }

  private getBooks() {
    this.books$ = this.service.getBooks(); // тут сабскрайбинг делает пайп асинк
  }

  toString(book: Book): string {
    return `${book.id} ${book.title} ${book.author} ${book.feedback} ${book.cover}`;
  }

  remove(book: Book) {
    this.service.removeBook(book.id).subscribe(() => this.getBooks());
    // ремув вернет обсерабле это своего рода функция субскрайб
    // инициализация полей не в конструкторе а тут по иниту
    // три функциональности в subscribe
  }
}
