import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {BooksService} from '../books.service';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book', templateUrl: './book.component.html', styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private service: BooksService, private routeActivated: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeActivated.paramMap.subscribe(params => {
      const id = params.get('id');
      this.book$ = this.service.getBook(+id); // перевод в число
    });
    // this.service.getBook(50505).subscribe((book) => this.book = book);
  }
}
