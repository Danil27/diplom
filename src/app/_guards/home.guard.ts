import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router, private login: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (/*this.login.logged*/true) {
      // logged in so 
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
