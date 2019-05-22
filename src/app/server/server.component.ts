import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus = 'offline' //could also do the random status here
  serverId = 10


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit() {

  }

  getColor() {
    return this.serverStatus === 'online' ? 'lightgreen' : 'red'
  }
}
