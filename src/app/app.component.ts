import {Component, Input} from '@angular/core';
import {UsernamePassword} from './username-password/username-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private category: any;
  // title = 'ANGULAR';
  // urlImage = 'http://lorempixel.com/500/500/cats';
  // urlImage;
  // isActive = false;
  // tuggleActive() {
  //   this.isActive = !this.isActive;
  // }
  @Input() likefromApp;

  onChange(category) {
    this.category = category;
  }

  onChangeLikes(likes) {
    this.likefromApp = likes;
    console.log(this.likefromApp);
  }

  onSubmit(usernamePassword: UsernamePassword) {
    console.log(`username = ${usernamePassword.username}, password = ${usernamePassword.password}`);
  }
}
