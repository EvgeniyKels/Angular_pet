import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../orders/ordersservice';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-reactive-form',
  templateUrl: './input-reactive-form.component.html',
  styleUrls: ['./input-reactive-form.component.css']
})
export class InputReactiveFormComponent implements OnInit {
  sizes = ['Short', 'Tall', 'Grate'];
  flavours = ['None', 'Caramel', 'Vanilla', 'Mocha', 'Cinnamon'];

  service: OrdersService;

  constructor(service: OrdersService) {
    this.service = service;
  }
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      coffee: new FormControl(null, Validators.required),
      email: new FormControl(null),
      size: new FormControl('Tall') // todo
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // if (form.value.email === null) {
    //   form.reset();
    //   return;
    // }
    // this.service.addOrder(form.value);
    // form.reset();
  }






}
