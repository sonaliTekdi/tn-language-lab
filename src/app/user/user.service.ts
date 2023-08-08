import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any;
  buddyUserData1: any;
  buddyUserData2: any;
  constructor() { }

  getUser() {
    const token = localStorage.getItem('token');

    if (!!token) {
      this.userData = jwt_decode(token);
      return this.userData;
    } else {
      return false;
    }
  }

  getBuddyUser() {
    // const token1 = localStorage.getItem('token');
    const token2 = localStorage.getItem('buddyToken')
    if (!!token2) {
      // this.buddyUserData1 = jwt_decode(token1);
      this.buddyUserData2 = jwt_decode(token2);
      return this.buddyUserData2;
    } else {
      return false;
    }
  }
}