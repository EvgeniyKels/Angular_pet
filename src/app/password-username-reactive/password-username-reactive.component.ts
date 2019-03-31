import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PasswordValidator} from '../PasswordValidator';

@Component({
  selector: 'app-password-username-reactive',
  templateUrl: './password-username-reactive.component.html',
  styleUrls: ['./password-username-reactive.component.css']
})
export class PasswordUsernameReactiveComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl('', [PasswordValidator.passwordRiles]),
  });
  @Output() data = new EventEmitter();

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  pattern = '[^\\s]+';

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.data.emit(this.form.value);
    // this.form.reset();
  }
}
