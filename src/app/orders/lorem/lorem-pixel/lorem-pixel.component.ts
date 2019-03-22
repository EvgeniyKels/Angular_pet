import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-lorem-pixel',
  templateUrl: './lorem-pixel.component.html',
  styleUrls: ['./lorem-pixel.component.css']
})
export class LoremPixelComponent {
  // urlImage = '';
  // isActive = false;
  // pushbutton(num: number = 500, num1: number = 450, category: string = 'cats') {
  //   this.isActive = !this.isActive;
  //   this.urlImage  = `http://lorempixel.com/${num}/${num1}/${category}`;
  //   setTimeout(() => {
  //     this.urlImage  = `http://lorempixel.com/${num}/${num1}/${category} `;
  //     this.isActive = false;
  //     }, 100);
  // }

  @Input() public width = 500;
  @Input() height = 500;
  @Input() category = 'cats';
  @Output() change = new EventEmitter(); // некое событие. Происходит событие change;
  private toggle = false;
  private urlImage = `http://lorempixel.com/`;
  private categories = ['abstract', 'people', 'sports', 'cats', 'animals', 'fashion', 'nightlive'];
  index = 0;

  pushbutton() {
    this.index ++;
    if (this.index === this.categories.length) {
      this.index = 0;
    }
    this.category = this.categories[this.index];
    this.change.emit(this.category);
  }

  getUrl() {
    return this.urlImage  = `http://lorempixel.com/${this.width}/${this.height}/${this.category}`;
  }
}

