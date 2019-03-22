import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  private like = 'favorite_border';
  // private numbers = 40;
  @Input() likesCount: number;
  @Output() changeinc = new EventEmitter();

  fl: boolean;
  changePic() {
    this.like = 'favorite';
    setTimeout(() => {
      this.like = 'favorite_border';
    }, 200);
    this.fl ? this.likesCount -- : this.likesCount ++;
    this.fl = !this.fl;
    this.changeinc.emit(this.likesCount);
  }
}
