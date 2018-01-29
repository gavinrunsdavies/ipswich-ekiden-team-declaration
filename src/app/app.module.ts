import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamService } from './team.service';
import { TeamSearchComponent } from './team-search/team-search.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    MessagesComponent,
    TeamSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot()    
  ],
  providers: [TeamService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
