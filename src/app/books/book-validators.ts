import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {BooksService} from './books.service';
import {Book} from './book';
import {promise} from 'selenium-webdriver';

export class BookValidators {
  static service: BooksService;
  static unique(control: AbstractControl): Promise<ValidationErrors|null> {
    const formControl = control as FormControl;
    try {
      return new Promise(resolve => {
        const id = formControl.value as number;
        BookValidators.service.getBook(id).subscribe(() =>
          resolve({unique: true}), error => resolve(null));
      });
    } catch (e) {
    }
  }
}
