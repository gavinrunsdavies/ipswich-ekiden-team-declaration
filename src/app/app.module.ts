import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS}    from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { TeamService } from './services/team.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

import { JwtInterceptor  } from './helpers/jwt.interceptor';

import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamsComponent,    
    TeamDetailComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    NgxDatatableModule
  ],
  providers: [
    TeamService,
    MessageService,
    AuthService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    EnsureAuthenticated,
    LoginRedirect,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
