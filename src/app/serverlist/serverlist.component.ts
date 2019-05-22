import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverlist',
  templateUrl: './serverlist.component.html',
  styleUrls: ['./serverlist.component.css']
})
export class ServerlistComponent implements OnInit {

  allowServerCreation = false
  serverCreationStatus = 'No server created'
  serverName = 'test-server'
  servers = ['test-server 1', 'test-server 2']
  serverCreated = false


  constructor() {

    setTimeout(
      () => {this.allowServerCreation = true},
      2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Created server: ' + this.serverName
    this.serverCreated = true
    this.servers.push(this.serverName)
  }
}
