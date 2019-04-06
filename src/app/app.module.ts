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
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookComponent } from './books/book/book.component';
import { InputReactiveFormComponent } from './coffee/input-reactive-form/input-reactive-form.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import {ServerService} from './httprequest/serv/server.service';
import {HomeComponent} from './routing-from-udemi/home/home.component';
import {UserComponent} from './routing-from-udemi/users/user/user.component';
import {EditServerComponent} from './routing-from-udemi/servers/edit-server/edit-server.component';
import {ServerComponent} from './routing-from-udemi/servers/server/server.component';
import {ServersComponent} from './routing-from-udemi/servers/servers.component';
import {UsersComponent} from './routing-from-udemi/users/users.component';
import {ServersService} from './routing-from-udemi/servers/servers.service';
// ЭТОТ ФАЙЛ _ аппликационный контекст
const appRouter: Routes = [
  { path: '', component: HomeComponent }, /*localhost:4200/users*/
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent },
  // servers compinent, line 14
  { path: 'servers/servers', component: BooksFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
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
    NavigatorComponent,
    NotFoundComponent,
    BookComponent,
    InputReactiveFormComponent,
    HttprequestComponent
  ],
  // другие модули
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // роуты, версия с UDEMI
    RouterModule.forRoot(appRouter)
    // вместе с раутингами имполртируем роутер модуль Версия Гранулятора
    // RouterModule.forRoot([
    //   {path: 'books/:id', component: BookComponent},
    //   {path: 'books', component: BooksListComponent},
    //   {path: 'addbook', component: BooksFormComponent},
    //   // default routing
    //   {path: '**', component: NotFoundComponent}
    // ])
  ],
  // то что будет в контексте
  // а провайдерс сначала абстрактный класс, потом класс реализации Дает возможность заменять рабочие классы
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimics},
    {provide: AbstrAuth, useClass: RealAuth},
    {provide: ServerService, useClass: ServerService},
    {provide: ServersService, useClass: ServersService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
