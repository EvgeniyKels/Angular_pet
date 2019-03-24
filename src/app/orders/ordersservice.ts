export abstract class OrdersService {
  abstract addOrder(order): boolean;
  abstract getOrders(): string[];
  abstract remove(id: string): boolean;
}
