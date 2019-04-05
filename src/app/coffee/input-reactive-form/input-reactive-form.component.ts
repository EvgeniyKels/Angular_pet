import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../orders/ordersservice';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-reactive-form',
  templateUrl: './input-reactive-form.component.html',
  styleUrls: ['./input-reactive-form.component.css']
})
export class InputReactiveFormComponent implements OnInit {
  sizes = ['Short', 'Tall', 'Grate'];
  flavours = ['None', 'Caramel', 'Vanilla', 'Mocha', 'Cinnamon'];
  bannedUserNames = ['Iluha', 'Roma', 'Vova'];

  service: OrdersService;

  constructor(service: OrdersService) {
    this.service = service;
  }

  signupForm: FormGroup;

  bannedNames(control: FormControl): {[s: string]: boolean} {
    if (this.bannedUserNames.indexOf(control.value) !== -1) {
      return {'+++++': true};
    }
    return null;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        coffee: new FormControl(null, [Validators.required, this.bannedNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        size: new FormControl('Tall'), // todo
      }), flavour: new FormControl(null), strength: new FormControl(50),
      hobbyes: new FormArray([])
    });
  }

  onAddHobby() {
    const formControl = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbyes') as FormArray).push(formControl);
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
