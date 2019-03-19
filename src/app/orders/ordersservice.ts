export abstract class OrdersService {
  abstract addOrder(order): boolean;
  abstract getOrders(): any;
}
