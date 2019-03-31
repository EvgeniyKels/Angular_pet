import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Promise} from 'q';
import {BooksService} from './books.service';

export class BooksValidators {
  static booksService: BooksService;
  static uniqueId(control: AbstractControl): Promise<ValidationErrors|null> {
    const id = control.value;
    return new Promise(resolve => {
      BooksValidators.booksService.getBook(id).subscribe(() => resolve({unique: true}), () => resolve(null));
    });
  }
}
