import { Component, OnInit } from '@angular/core';
import {ServerService} from './serv/server.service';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent {
  servers = [{
    name: 'test',
    capacity: 10,
    id: this.generateId()
  },
    {
      name: 'NOTtest',
      capacity: 100,
      id: this.generateId()
    },
  ];

  onAddServer() {
    console.log('d');
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private serverService: ServerService) { }
  onSave() {
    this.serverService.storeService(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
