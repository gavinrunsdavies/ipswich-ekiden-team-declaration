import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './routes';
import { LoginRedirect } from './services/login-redirect.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { EnsureAdminUser } from './services/ensure-admin-user.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';
import { TeamService } from './services/team.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';

export const config: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    LoginRedirect,
    EnsureAuthenticated,
    EnsureAdminUser,
    AuthService,
    MessageService,
    ContactService,
    UserService,
    TeamService
  ]
};