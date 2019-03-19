import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import {OrdersService} from './orders/ordersservice';
import {OrdersServiceMimix} from './orders/orders-mimix.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimix}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
