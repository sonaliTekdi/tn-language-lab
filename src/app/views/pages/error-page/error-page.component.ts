import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import { UserSessionService } from 'src/app/core/services/usersession.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  type: any;
  title: any;
  desc: any;
  private sub: Subscription;
  userName: any;
  emisUserType: any;
  teacherType: any;
  emisUserType1: any;

  constructor(private route: ActivatedRoute,
    // private userSessionService:UserSessionService,
    private router: Router,private alertService:AlertService) {
   
   }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);
    
    this.sub = this.route.data.subscribe( param => {
      if(param.type) {
        this.type = param.type;
      }
      if(param.title) {
        this.title = param.title;
      }
      if(param.desc) {
        this.desc = param.desc
      }
    });

    switch(this.type) {
      case '404':
        if (!this.title) {
          this.title = 'Page Not Found'
        }
        if (!this.desc) {
          this.desc = 'Oopps!! The page you were looking for doesn\'t exist.'
        }
        break;
      case '500':
        if (!this.title) {
          this.title = 'Internal server error'
        }
        if (!this.desc) {
          this.desc = 'Oopps!! There wan an error. Please try agin later.'
        }
        break;
      default:
        // if (!this.type) {
          this.type = 'Ooops..';
        // }
        if (!this.title) {
          this.title = 'Something went wrong';
        }
        if (!this.desc) {
          this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
        }
    }
  }

	ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  redirect(){

    if (
      (this.emisUserType != 1 &&
        this.emisUserType != 8 && this.emisUserType != 11 &&
        this.emisUserType != 22 &&   this.emisUserType != 28 &&
        this.emisUserType != 14) ||
      (this.emisUserType == 14 && this.teacherType == 103)
    ) {
if(this.emisUserType==5 && this.emisUserType1==10){
this.router.navigate(["/component/health"]);
}
else if(
(this.emisUserType==5 || this.emisUserType==15 || this.emisUserType==24  && (this.emisUserType1==1 || this.emisUserType1==3 || this.emisUserType1==5 || this.emisUserType1==7 || this.emisUserType1==11) && (this.userName != 'kt1_state' && this.userName != 'kt2_state' && this.userName != 'kt3_state')) || 
(this.emisUserType==3  && (this.emisUserType1==1 || this.emisUserType1==2)) || 
(this.emisUserType==9  && (this.emisUserType1==1 || this.emisUserType1==2)) || (this.emisUserType==10   && this.emisUserType1==3) ||
(this.emisUserType==6 && (this.emisUserType1==1 || this.emisUserType1==2)) || 
(this.emisUserType==2 && this.emisUserType1==1) || (this.emisUserType1==90002) || 
(this.emisUserType==27 && (this.emisUserType1==1 || this.emisUserType1==4))
 ||  ((this.emisUserType == 39 || this.emisUserType == 36 || this.emisUserType == 37 || this.emisUserType == 38) && (this.emisUserType1==1 || this.emisUserType1==2))
 || (this.emisUserType == 13 && (this.emisUserType1==1 || this.emisUserType1==3 || this.emisUserType1==6)
 || (this.emisUserType == 19 && this.emisUserType1==0))// For New Login Condition
)
{
this.router.navigate(["/dashboard"]);
}
else if((this.emisUserType==27)){

if(this.emisUserType1==3 || this.emisUserType1==9){
  this.router.navigate(["/health/mht-scheduling"]);
} else if(this.emisUserType1==8){
  this.router.navigate(['/approval/swd-bmi-noonmeal'])
} else if(this.emisUserType1 == 7){
  this.router.navigate(['/search/deic-consultation']);
}

}

else if(this.emisUserType==5 && this.emisUserType1==13){
this.router.navigate(['/component/itk-dashboard']);
} else if((this.emisUserType==32 && (this.emisUserType1==1 || this.emisUserType1==2))) {
this.router.navigate(['/approval/rte-std-verification']);
}
else if((this.emisUserType==35 && (this.emisUserType1==1 || this.emisUserType1==2))) {
if(this.emisUserType1==1){
  this.router.navigate(['/approval/dote-verification']);
}
else{
  this.router.navigate(['/approval/det-verification']); 
}
}
// For New Login Condition start
else if(this.emisUserType == 5 && this.emisUserType1 == 5){
this.router.navigate(["/dashboard"]);
}
// For New Login Condition end
else if(this.userName == 'kt1_state' || this.userName == 'kt2_state' || this.userName == 'kt3_state'){
this.router.navigate(['/competition/Art_Culture_state']);
}
else if((this.emisUserType == 40 ))
{
this.router.navigate(["/admin"]);
}

else{
this.alertService.info("We are upgrading our portal for an enhanced experience. Kindly check for updates later. Thank you for understanding!");
}
}

else{
'Please Login from "emis.tnschools.gov.in"'
}

  }

}
