import { Component } from '@angular/core';
import {OrdersService} from '../../orders/ordersservice';

@Component({
  selector: 'app-coffee-order',
  templateUrl: './coffee-order.component.html',
  styleUrls: ['./coffee-order.component.css']
})
export class CoffeeOrderComponent {
  service: OrdersService;
  constructor(service: OrdersService) {
    this.service = service;
  }
  onSubmit(form) {
    this.service.addOrder(form.value);
    form.reset();
  }
}
