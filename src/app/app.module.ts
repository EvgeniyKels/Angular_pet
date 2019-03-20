import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersService } from './orders/ordersservice';
import { OrdersServiceMimics } from './orders/orders-mimics.service';
import { OrdersFormComponent } from './orders/orders-form/orders-form.component';
import { LoremPixelComponent } from './orders/lorem/lorem-pixel/lorem-pixel.component';
import { FormsModule } from '@angular/forms';
import { SyncInputComponent } from './sync-input/sync-input.component';
import { SummaryPipe } from './summary.pipe';
import { LikeComponent } from './like/like.component';
import { PipetitlePipe } from './pipetitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    OrdersFormComponent,
    LoremPixelComponent,
    SyncInputComponent,
    SummaryPipe,
    LikeComponent,
    PipetitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule// другие модули
  ],
  // то что будет в контексте
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimics}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
