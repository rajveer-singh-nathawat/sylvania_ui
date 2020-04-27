import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../sessions/session.service';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild  {
  constructor(private readonly sessionService: SessionService,
    private readonly router: Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
    return this.canActivate(childRoute, state);
    

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
    if (this.sessionService.hasResource(route.data.roles)) {
      return true;
  }
  this.router.navigate(['authenticate']);
  return false;
  }
  
}
