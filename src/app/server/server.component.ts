import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowServerCreation = false;
  serverCreationStatus = 'No server created'

  constructor() {

    setTimeout(
      () => {this.allowServerCreation = true},
      2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created'
  }

}
