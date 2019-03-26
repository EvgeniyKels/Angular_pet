import { Injectable } from '@angular/core';
import { OrdersService } from './ordersservice';

@Injectable({     // типа @Service. тогда можно не указывать в провайдах но тога в компоненте надо указывать не абстрактный класс а конечный
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

  getOrders(): string[] {
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



