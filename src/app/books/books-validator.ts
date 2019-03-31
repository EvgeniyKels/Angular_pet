import {AbstractControl, ValidationErrors} from '@angular/forms';
import {BooksService} from './books.service';

export class BooksValidators {
  // асинхронный валидатор
  static booksService: BooksService;
  static uniqueId(control: AbstractControl): Promise<ValidationErrors | null> {
    const id = control.value as number;
    return new Promise(resolve => {
      BooksValidators.booksService.getBook(id).subscribe(() => resolve({unique: true}), () => resolve(null));
    });
  }
}
