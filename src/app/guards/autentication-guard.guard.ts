import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticationGuardGuard implements CanActivate, CanActivateChild  {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isUserLogin()) {
      this.router.navigate(['sessions']);
      return false;
    } else {
      return true;
    }
  }
  canActivateChild(childroute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childroute, state);
  }
}
