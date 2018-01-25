import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamService } from './team.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { TeamSearchComponent } from './team-search/team-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    MessagesComponent,
    TeamSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TeamService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
