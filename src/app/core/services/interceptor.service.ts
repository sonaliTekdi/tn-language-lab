import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserSessionService } from './usersession.service';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor {

    private baseUrl = environment.apiBaseUrl;
    private stagingLoginApiBaseUrl = "http://13.232.216.80/api/login";
    private authorization_key = environment.loggedInAuthorization;
    private loginAuthorization_key = environment.loginAuthorization;
    private loggedInAuthorization_key = environment.loggedInAuthorization;
  constructor(
    private router: Router,
    private sessionService: UserSessionService,
    private authService: AuthenticationService,
    private alertService: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    const authToken = this.sessionService.authToken();

        if(authToken !=null )
        {
          // if (request.url.search(this.baseUrl1) != -1 )
          //  {
          //     let requests = request.clone({
          //     headers:new HttpHeaders({
          //       'Connection': "keep-alive",
          //       'x-api-key': this.authorization1
          //        })
          //     });
          //   return next.handle(requests).pipe(
          //     catchError(this.handleError<any>('role', []))
          //   )
          // }
          // else {
          //   let requests = request.clone({
          //     headers:new HttpHeaders({
          //       // 'Content-Type': "image/jpeg",
          //        })
          //     });
          //   return next.handle(requests).pipe(
          //     catchError(this.handleError<any>('role', []))
          //   )
          // }
        }
        else
        {
          if (request.url.includes("schlReg"))
          {
            let requests = request.clone({
              headers:new HttpHeaders({
                      'Authorization': this.loggedInAuthorization_key,
              })
            });
           return next.handle(requests).pipe(
             catchError(this.handleError<any>('role', [])))
          }
          else if(request.url.includes(this.stagingLoginApiBaseUrl))
          {
            let requests = request.clone({
              headers:new HttpHeaders({
                      'Authorization': this.loggedInAuthorization_key,
              })
            });
           return next.handle(requests).pipe(
             catchError(this.handleError<any>('role', [])))
          }
          // else if(request.url.includes('auth'))
          // {
          //
          //   let requests = request.clone({
          //     headers:new HttpHeaders({
          //             'Authorization': this.loggedInAuthorization_key,
          //     })
          //   });
          //  return next.handle(requests).pipe(
          //    catchError(this.handleError<any>('role', [])))
          // }
          else if(request.url.includes('newSchool-Reg'))
          {
            let requests = request.clone({
              headers:new HttpHeaders({
                'Connection': "keep-alive"
              })
            });
           return next.handle(requests).pipe(
             catchError(this.handleError<any>('role', [])))
          }
          else
          {
            let requests = request.clone({
              headers:new HttpHeaders({
                      'Authorization': this.loginAuthorization_key,
              })
            });
          return next.handle(requests).pipe(
            catchError(this.handleError<any>('role', [])))
          }
        }
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          if(error instanceof HttpErrorResponse){
            // console.error("Error: " + error.status);
            if(error.status == 401){
                // localStorage.clear();
                // this.authService.logOut();
                // this.router.navigate(['/login']);
            }
            else if(error.status == 404){
               this.alertService.error(error.message);
            }
            else if(error.status == 503){
              this.alertService.error(error.message);
            }
            else{
              let errorMessage = '';
              let type : number;
              if (error.error instanceof ErrorEvent) {
                 // client-side error
                  errorMessage = `${error.error.message}`;
                  type = 1;
              } else {
                  // server-side error
                  errorMessage = `${error.message}`;
                  type = 2;
              }
              // this.alertService.error((type == 2) ? `${error.status} / ${error.statusText} Occurred` : `Error Message : ${errorMessage}`);
              return throwError('An error occurred, please try again later \n '+ errorMessage);
            }
          }
          return of(result as T);
        };
      }

   }
