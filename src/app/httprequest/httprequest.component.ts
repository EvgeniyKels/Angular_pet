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
  Test = this.serverService.getAppName();
  onAddServer(name) {
    this.servers.push({
      name: name.value,
      capacity: 100,
      id: this.generateId()
    });
    name.value = '';
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private serverService: ServerService) { }
  onSave() {
    // todo почему невозвращает весь респонс
    this.serverService.storeService(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (response) => response,
      (error) => console.log(error)
    );
  }

  onUpdate() {
    this.serverService.storePutService(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}

export interface Serverok {
  name: string;
  capacity: number;
  id: number;
}
