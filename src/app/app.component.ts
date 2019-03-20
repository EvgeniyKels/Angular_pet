import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ANGULAR';
  // urlImage = 'http://lorempixel.com/500/500/cats';
  // urlImage;
  // isActive = false;
  // tuggleActive() {
  //   this.isActive = !this.isActive;
  // }
  text = 'quququ';

  onClick_() {
    alert(this.text);
  }
}
