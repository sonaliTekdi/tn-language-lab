import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TelemetryService } from '../telemetry.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(public telemetryService: TelemetryService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.telemetryService.impression("Login", "/login");
  }
  login() {
    this.telemetryService.interact("Submit", 'Login')
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.dataStatus)
        {
          this.telemetryService.response(jwt_decode(data?.records?.token));
          localStorage.setItem('token', data?.records?.token);
        }else{
          this.telemetryService.error(data?.message, {
            err: data?.message, errtype: data?.status
          });
          alert(data.message)
        }

    // Redirect to protected route
    this.router.navigate(['/level']);
      },
      error => {
        console.log(error)
        this.errorMessage = error.message;
      }
    );
  }
}
