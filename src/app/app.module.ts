import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { FormsModule } from '@angular/forms';
import { ServerlistComponent } from './serverlist/serverlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
