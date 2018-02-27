import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginRedirect implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/status');
      return false;
    }
    else {
      return true;
    }
  }
}