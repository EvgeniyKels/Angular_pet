import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

export interface UsernamePassword {
  username: string;
  password: string;
}

@Component({
  selector: 'app-username-password',
  templateUrl: './username-password.component.html',
  styleUrls: ['./username-password.component.css']
})
export class UsernamePasswordComponent implements OnInit {
  pattern = '[^\\s]+';
  @Output() data = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    const userPassword = form.value as UsernamePassword;
    this.data.emit(userPassword);
    form.reset();
  }
}
