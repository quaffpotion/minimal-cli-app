import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowServerCreation = false;
  serverCreationStatus = 'No server created'
  serverName = 'test-server'
  inputValueString = "input value string yay"
  //styleObject = {background-color: "lightgreen"}
  styleObjectString = "{background-color: 'lightgreen'}"

  constructor() {

    setTimeout(
      () => {this.allowServerCreation = true},
      2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Created server: ' + this.serverName
  }

  onUpdateServer(event: Event) {
    //this.serverName = event.target.value //is fine
    this.serverName = (<HTMLInputElement>event.target).value //inform typescript what exactly it is, parentheses necessary

  }

}
