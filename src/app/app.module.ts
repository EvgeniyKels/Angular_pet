import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersService } from './orders/ordersservice';
import { OrdersServiceMimics } from './orders/orders-mimics.service';
import { OrdersFormComponent } from './orders/orders-form/orders-form.component';
import { LoremPixelComponent } from './orders/lorem/lorem-pixel/lorem-pixel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SyncInputComponent } from './sync-input/sync-input.component';
import { SummaryPipe } from './summary.pipe';
import { LikeComponent } from './like/like.component';
import { PipetitlePipe } from './pipetitle.pipe';
import { TweeeetComponent } from './tweeeet/tweeeet.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { CoffeeOrderComponent } from './coffee/coffee-order-form/coffee-order.component';
import { CoffeeOrderPendorderComponent } from './coffee/coffee-order-pendorder/coffee-order-pendorder.component';
import { NavigatorViewComponent } from './navigator-view/navigator-view.component';
import { LoginComponent } from './coffee/auth/login/login.component';
import { OttegramComponent } from './ottegram/ottegram/ottegram.component';
import { OttegramListComponent } from './ottegram/ottegram-list/ottegram-list.component';
import { OttegramMainPictureComponent } from './ottegram/ottegram-main-picture/ottegram-main-picture.component';
import { RegistrationComponent } from './coffee/auth/registration/registration.component';
import {AbstrAuth} from './coffee/auth/abstrAuth';
import {RealAuth} from './coffee/auth/realAuth';
import { UsernamePasswordComponent } from './username-password/username-password.component';
import { PasswordUsernameReactiveComponent } from './password-username-reactive/password-username-reactive.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksFormComponent} from './books/books-form/books-form.component';
import {BooksNavigatorComponent} from './books/books-navigator/books-navigator.component';
import { VideoPlayersComponent } from './video-players/video-players.component';
import { NavigatorComponent } from './books/navigator/navigator.component';
// ЭТОТ ФАЙЛ _ аппликационный контекст
@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    OrdersFormComponent,
    LoremPixelComponent,
    SyncInputComponent,
    SummaryPipe,
    LikeComponent,
    PipetitlePipe,
    TweeeetComponent,
    HeaderBodyComponent,
    CoffeeOrderComponent,
    CoffeeOrderPendorderComponent,
    NavigatorViewComponent,
    LoginComponent,
    OttegramComponent,
    OttegramListComponent,
    OttegramMainPictureComponent,
    RegistrationComponent,
    UsernamePasswordComponent,
    PasswordUsernameReactiveComponent,
    BooksListComponent,
    BooksFormComponent,
    BooksNavigatorComponent,
    VideoPlayersComponent,
    NavigatorComponent
  ],
  // другие модули
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // то что будет в контексте
  // а провайдерс сначала абстрактный класс, потом класс реализации Дает возможность заменять рабочие классы
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimics},
    {provide: AbstrAuth, useClass: RealAuth}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
