import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://emislogin.tnschools.gov.in/emis_login/api/ATSLlogin'; // Replace with your API endpoint

  constructor(private router: Router, private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const credentials = {records: { emis_username: email, emis_password: password }};
    return this.http.post(this.apiUrl, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
}
