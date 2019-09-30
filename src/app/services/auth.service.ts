import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export  class AuthService {

  constructor(private readonly route: Router ) { }
  async authenticate(username , password ) {
    if (username === 'rajveer' && password === 'singh') {
     await sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  userData() {
let principle = sessionStorage.getItem('authenticateUser');
  }
  isUserLogin() {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null );
  }
 async logOut() {
   await sessionStorage.removeItem('authenticateUser');
    this.route.navigate(['sessions']);
  }
}

