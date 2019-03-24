import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../ordersservice';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {
  // autowired
  private service: OrdersService;

  // orders: string[] = ['espresso', 'black coffee', 'hafux'];
  constructor(service: OrdersService) {
    this.service = service;
  }

  getOrders() {
    return this.service.getOrders();
  }

  onInput($event) {
    this.service.addOrder($event.target.value);
    $event.target.value = ' ';
  }

  // remove(i: number) {
  //   this.service.remove(i);
  // }
}
