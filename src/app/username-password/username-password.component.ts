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
  @Output() data  = new EventEmitter();
  pattern = /[^\\s]+/;
  constructor() {
  }

  ngOnInit() {
  }

  submit(form) {
    const usernamePassword = form.value as UsernamePassword;
    this.data.emit(usernamePassword);
    form.reset();
  }
}
