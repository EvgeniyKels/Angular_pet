import {AbstractControl, ValidationErrors} from '@angular/forms';
import {el} from '@angular/platform-browser/testing/src/browser_util';

export class PasswordValidator {
  static passwordRiles(passwordControl: AbstractControl): ValidationErrors | null {
    const password = passwordControl.value as string;
    let flUpper = false;
    let flLower = false;
    let flDigit = false;
    let flSymbole = false;
    for (const c of password) {
      if (c.match(/[A-Z]/)) {
        flUpper = true;
      } else if (c.match(/[a-z]/)) {
        flLower = true;
      } else if (c.match(/\d/)) {
        flDigit = true;
      } else if (c.match(/[!@#$%^&*()+=_\-]/)) {
        flSymbole = true;
      }
    }
    return flUpper && flLower && flDigit && flSymbole ? null : {
      uppercase: !flUpper,
      lowercase: !flLower,
      digit: !flDigit,
      symbol: !flSymbole
    };
  }
}
