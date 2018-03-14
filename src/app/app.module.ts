import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { JuniorsComponent } from './juniors/juniors.component';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { TeamService } from './services/team.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

import { JwtInterceptor } from './helpers/jwt.interceptor';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamsComponent,
    TeamDetailComponent,
    MessagesComponent,
    RegisterComponent,
    StatusComponent,
    HomeComponent,
    FilterPipe,
    StatisticsComponent,
    JuniorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    RecaptchaModule.forRoot()
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
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
