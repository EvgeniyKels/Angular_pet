import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  private like = 'favorite_border';
  private numbers = 0;
  inputText = '';
  changePic() {
    this.like = 'favorite';
    setTimeout(() => {
      this.like = 'favorite_border';
      this.numbers ++;
    }, 200);
  }
}
