import {Component, EventEmitter, Output} from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-ottegram-list',
  templateUrl: './ottegram-list.component.html',
  styleUrls: ['./ottegram-list.component.css']
})
export class OttegramListComponent {
  names = ['moshe', 'nemoshe', 'vasya', 'petya', 'klava'];
  @Output() obj = new EventEmitter();
  getNames() {
    return this.names;
  }

  sendPic(i) {
    return this.obj.emit(new Imagge(this.names[i], i + 1));
  }
}

export class Imagge {
  name: string;
  num: number;
  constructor(name: string, num: number) {
    this.name = name;
    this.num = num;
  }
}
