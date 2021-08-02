import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export  class AuthService {

  constructor(private readonly route: Router ) { }
   authenticate(token) {
    if (token === sessionStorage.getItem('token')) {
     return true;
    } else {
    return false;
    }
  }

  userData() {
let principle = sessionStorage.getItem('currentUser');
  }
  isUserLogin() {
    const user = sessionStorage.getItem('currentUser');
    return !(user === null );
  }
 async logOut() {
   await sessionStorage.removeItem('currentUser');
   sessionStorage.removeItem('currentUserId');
   sessionStorage.removeItem('token');
   this.route.navigate(['sessions']);
  }
}

