import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ottegram-main-picture',
  templateUrl: './ottegram-main-picture.component.html',
  styleUrls: ['./ottegram-main-picture.component.css']
})
export class OttegramMainPictureComponent implements OnInit {
  @Input() sendedPic;

  ngOnInit(): void {
    this.sendedPic = {name: 'OTTER-Tel_ran', num: 1};
  }
}
