import { Component } from '@angular/core';
import {AbstrAuth} from '../abstrAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService: AbstrAuth;

  constructor(authServ: AbstrAuth) {
    this.authService = authServ;
  }

  logIt(f: HTMLFormElement) {
    console.log(this.authService.logination(f.value));
    f.reset();
  }
}
