import { Component } from '@angular/core';

@Component({
  selector: 'app-sync-input',
  templateUrl: './sync-input.component.html',
  styleUrls: ['./sync-input.component.css']
})
export class SyncInputComponent {
  text = '';
  lim = 15;
  onClick_() {
    alert(this.text);
  }
}
