import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweeeet',
  templateUrl: './tweeeet.component.html',
  styleUrls: ['./tweeeet.component.css']
})
export class TweeeetComponent implements OnInit {
  @Input() countLikes = 0;
  tweet = {
    title: 'Angular',
    body: 'long story about Angular',
    likes: this.countLikes
  };

  onChange(likes) {
    this.tweet.likes = likes;
  }

  ngOnInit(): void {
    this.tweet.likes = this.countLikes;
  }

}
