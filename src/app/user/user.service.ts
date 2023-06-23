import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any;
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
}
