import { Injectable } from '@angular/core';
import { BaseUrl } from '../shared/constants/url-constants';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  currentUserRole: string;
  constructor(private readonly http: HttpClient) { }

  onLogin(data: any) {
    return this.http.post<any>(BaseUrl.URL + '/signin',data)
    .pipe(
      map(
        resp=>{
          if(resp.jwt){
            this.resolveSessionParams(resp);
            return resp.jwt;
          }
          return null;
        }
      )
    )
  }
  register(data: any) {
    return this.http.post<any>(BaseUrl.URL + '/signup', data);
  }
  resolveSessionParams(resp: any) {
    sessionStorage.setItem('token', resp.jwt);
    const username = JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).fullName;
    const userId = JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).userId;
      sessionStorage.setItem('currentUser', username);
      sessionStorage.setItem('currentUserId', userId);
  }
  hasResource(roles: any) {
    if (sessionStorage.getItem('token')) {
      this.currentUserRole = JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).role;
      if (roles[0] === this.currentUserRole) {
        return true;
      } else if (roles[0] === 'ALL') {
        return true;
      } else if (roles[1] === this.currentUserRole) {
        return true;
      }
    }
    return false;
  }
}
