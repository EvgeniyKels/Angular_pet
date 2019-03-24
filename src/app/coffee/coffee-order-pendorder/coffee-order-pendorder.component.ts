import {Component} from '@angular/core';
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

  deleteOrder(order: string) {
    const arr = order.split(/\s/);
    this.service.remove(arr[1]);
  }
}
