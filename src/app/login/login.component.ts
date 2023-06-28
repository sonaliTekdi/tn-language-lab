import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TelemetryService } from '../telemetry.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(public userService: UserService, public telemetryService: TelemetryService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.telemetryService.impression("Login", "/login");
  }
  loginAsGuest(){
    this.telemetryService.interact("LoginAsGuest", 'Login')
    localStorage.setItem('guestUser', 'true');
    this.router.navigate(['/level']);
  }
  login() {
    this.telemetryService.interact("Submit", 'Login')
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.dataStatus)
        {
          localStorage.setItem('token', data?.records?.token);
          let users = this.userService.getUser();
          this.telemetryService.log(
            'api_login_call',
            'Successfully logged in',
            'login',
            users
          );

          this.router.navigate(['/level']);

        }else{
          this.telemetryService.error(data?.message, {
            err: data?.message, errtype: data?.status
          });
          alert(data.message)
        }
      },
      error => {
        console.log(error)
        this.errorMessage = error.message;
      }
    );
  }
}
