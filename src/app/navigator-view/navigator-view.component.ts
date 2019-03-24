import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigator-view',
  templateUrl: './navigator-view.component.html',
  styleUrls: ['./navigator-view.component.css']
})
export class NavigatorViewComponent implements OnInit {
  viewMode = 'c1';
  @Input() tab1Name: string;
  @Input() tab2Name: string;
  @Input() tab3Name: string;
  @Input() tab4Name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
