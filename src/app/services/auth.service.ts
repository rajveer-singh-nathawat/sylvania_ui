import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenticate(username , password ) {
    if (username === 'rajveer' && password === 'singh') {
      sessionStorage.setItem('authenticateUser', username);
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
  // logOut() {
  //   sessionStorage.removeItem('authenticateUser');
  // }
}

