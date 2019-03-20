import { Component } from '@angular/core';

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
  private width = 500;
  private height = 500;
  private category = 'cats';
  private toggle = false;
  private urlImage = `http://lorempixel.com/${this.width}/${this.height}/${this.category}`;

  pushbutton() {
    if (this.toggle) {
      this.urlImage += ' ';
    } else {
      this.urlImage = this.urlImage.trim();
    }
    this.toggle = !this.toggle;
  }

}

