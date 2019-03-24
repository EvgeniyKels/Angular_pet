import {Injectable} from '@angular/core';
import {OrdersService} from './ordersservice';

@Injectable({
  providedIn: 'root'
})

export class OrdersServiceMimics extends OrdersService {
  orders = {};

  constructor() {
    super();
  }

  addOrder(order): boolean {
    if (!this.orders[order.email]) {
      this.orders[order.email] = order;
      return true;
    }
    return false;
  }

  getOrders() {
    return Object.values(this.orders);
  }

  remove(email: string): boolean {
    if (this.orders[email]) {
      return delete this.orders[email];
    } else {
      return false;
    }
  }
}



