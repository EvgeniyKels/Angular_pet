import {AbstractControl, ValidationErrors} from '@angular/forms';
import {BooksValidators} from './books-validator';
import {BooksService} from './books.service';

export class BooksNonStaticValidators {
  constructor(private booksService: BooksService) {
  //   uniqueId(control:AbstractControl):Promise < ValidationErrors|null> {
  //     const id = control.value as number;
  //       return new Promise(resolve => {
  //     BooksValidators.booksService.getBook(id)
  //       .subscribe(() => resolve({unique: true}), () => resolve(null));
  //   });
  }
}

// static uniqueId(control: AbstractControl): Promise<ValidationErrors | null> {
//   const id = control.value as number;
// return new Promise(resolve => {
//   BooksValidators.booksService.getBook(id).subscribe(() => resolve({unique: true}), () => resolve(null));
// });