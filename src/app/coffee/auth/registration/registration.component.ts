import { Component, OnInit } from '@angular/core';
import {AbstrAuth} from '../abstrAuth';
import {User} from '../realAuth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private authService: AbstrAuth;

  constructor(authServ: AbstrAuth) {
    this.authService = authServ;
  }


  regIt(f: HTMLFormElement) {
    this.authService.registration(f.value);
    f.reset();
  }
}
