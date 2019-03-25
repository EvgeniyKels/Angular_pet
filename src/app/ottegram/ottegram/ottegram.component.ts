import {Component} from '@angular/core';
import {Imagge} from '../ottegram-list/ottegram-list.component';

@Component({
  selector: 'app-ottegram',
  templateUrl: './ottegram.component.html',
  styleUrls: ['./ottegram.component.css']
})
export class OttegramComponent {
  jbj: Imagge;

  sendPicker(pic: Imagge) {
    this.jbj = pic;
  }
}
