import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.dataStatus)
        {
          localStorage.setItem('token', data?.records?.token);
        }else{
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
