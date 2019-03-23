import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../orders/ordersservice';

@Component({
  selector: 'app-coffee-order-pendorder',
  templateUrl: './coffee-order-pendorder.component.html',
  styleUrls: ['./coffee-order-pendorder.component.css']
})
export class CoffeeOrderPendorderComponent {
  service: OrdersService;

  constructor(service: OrdersService) {
    this.service = service;
  }

  getOrders() {
    return this.service.getOrders().map((el) => {
      return Object.values(el).join(' ');
    });
  }
}
