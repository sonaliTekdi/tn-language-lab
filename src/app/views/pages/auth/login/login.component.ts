import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Idle } from '@ng-idle/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserSessionService } from 'src/app/core/services/usersession.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  loginForm:UntypedFormGroup
  loginForm2:UntypedFormGroup
  emisUserType:number
  teacherType:number
  emisUserType1:number
  districtId:number
  pageStage:number
  showforgotpasswordpage : boolean = false;
  showloginpage : boolean = true;
  user_type: any;
  submitted: boolean = false;
  submitted1: boolean = false;
  stateOptions: any[];
  value1: string = "";
  PassShow: boolean = true;
  forgetSubmitted: boolean;
  successHide: boolean;
  emailId: any;
  content: string;
  username: any;
  userName: any;
  menuList: any;
  modData: any;
  mod2: any;

  constructor(private router: Router,
  private http: HttpClient,
  private route: ActivatedRoute,
  private authService:AuthenticationService,
  private userSessionService:UserSessionService,
  private alertService:AlertService,
  private idle: Idle,
  private commonservice: CommonService
  ) {
    this.stateOptions = [{label: 'School', value: '1'}, {label: 'Admin', value: '2'}];

   }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    // this.authService.logOut();
    this.mod2 = [];
    this.onLogout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.initValidators()
    this.validators()
    this.user_type = [
      { label: "Teacher", value: "0" },
      { label: "Others", value: "1" },
    ];
  }

  // onLoggedin(e: Event) {
  //   e.preventDefault();
  //   localStorage.setItem('isLoggedin', 'true');
  //   if (localStorage.getItem('isLoggedin')) {
  //     this.router.navigate([this.returnUrl]);
  //   }
  // }

  // onLogin() {
  //   this.submitted1 = true;
  //   if (this.loginForm.valid) {
  //     this.authService
  //       .login(this.loginForm.value.email, this.loginForm.value.password)
  //       .subscribe((data) => {
  //         debugger;
  //         if (data.dataStatus) {
  //           debugger;
  //           this.emisUserType = this.userSessionService.userTypeId();
  //           this.teacherType = this.userSessionService.teacherType();
  //           this.emisUserType1 = this.userSessionService.emisUsertype1();
  //           console.log(this.emisUserType1);
       
  //               if (
  //                 this.emisUserType == 5 &&
  //                 (this.emisUserType1 == 15 )
  //               )
  //              {
  //                 this.router.navigate(["/dashboard"]);
  //               }
              
        
        
            
  //           else {
  //             this.alertService.error(
  //               'Please Login from "emis.tnschools.gov.in"'
  //             );
  //           }
  //         } else {
  //           this.alertService.error(data.message);
  //         }
  //       });
  //   } else {
  //     this.validateFormControl();
  //   }
  // }

  eyeClick(){
    this.PassShow = !this.PassShow;
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((data) => {
          if (data.dataStatus) {
              // this.authService.get_menu().subscribe((data) => {
              let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/appmenu_prod_nestedjson.json';    
              this.http.get<any>(json_name).subscribe((data) => {
                this.menuList = data;

                this.userName = this.userSessionService.userName();
                this.emisUserType = this.userSessionService.userTypeId();
                this.teacherType = this.userSessionService.teacherType();
                this.emisUserType1 = this.userSessionService.emisUsertype1();
                this.mod2 = this.userSessionService.mod2();
                
                if(this.mod2){
                  localStorage.setItem('MenuList', JSON.stringify(this.menuList));
                  localStorage.setItem('ModList', JSON.stringify(this.mod2));
                }
            
                if((this.emisUserType != 1 &&
                    this.emisUserType != 8 && this.emisUserType != 11 &&
                    this.emisUserType != 22 &&   this.emisUserType != 28 &&
                    this.emisUserType != 14) ||
                    (this.emisUserType == 14 && this.teacherType == 103)
                ) {
                    if(this.emisUserType==5 && this.emisUserType1==10){
                      this.router.navigate(["/component/health"]);
                    }
                    else if((this.emisUserType==7 && this.emisUserType1==1) || (this.emisUserType==3 && this.emisUserType1==3)){
                      this.router.navigate(["/component/sports"]);
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
                      || (this.emisUserType == 19 && this.emisUserType1==0) || ((this.emisUserType == 42 || this.emisUserType == 41) && (this.emisUserType1==1 || this.emisUserType1==2))
                      || (this.emisUserType == 7 && this.emisUserType1==1)
                      )// For New Login Condition
                      )
                    {
                      this.router.navigate(["/dashboard"]);
                    }
                    else if((this.emisUserType==27)){

                      if(this.emisUserType1==3 || this.emisUserType1==9){
                        this.router.navigate(["/component/health"]);
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
                    else if((this.emisUserType == 40 && this.emisUserType1 == 0))
                    {
                      this.router.navigate(["/admin"]);
                    }
          
                    else{
                      if(this.mod2){
                        this.router.navigate(["/dashboard"]);
                      }
                      else{
                        this.alertService.info("We are upgrading our portal for an enhanced experience. Kindly check for updates later. Thank you for understanding!");
                      }
                    }
                  }
      
                  else{
                    'Please Login from "emis.tnschools.gov.in"'
                  }
          //   if (
          //     (this.emisUserType != 1 &&
          //       this.emisUserType != 8 && this.emisUserType != 11 &&
          //       this.emisUserType != 22 &&   this.emisUserType != 28 &&
          //       this.emisUserType != 14) ||
          //     (this.emisUserType == 14 && this.teacherType == 103)
          //   ) {
          //     if (this.emisUserType == 17) {
          //       this.alertService.error("Invalid Username or Password");
          //     } else if (
          //       this.emisUserType == 5 ||
          //       this.emisUserType == 6 ||
          //       this.emisUserType == 9 ||
          //       this.emisUserType == 10 ||
          //       this.emisUserType == 2 ||
          //       this.emisUserType == 19
          //     ) {
          //       if (
          //         this.emisUserType == 5 &&
          //         (this.emisUserType1 == 11 || this.emisUserType1 == 10)
          //       ) {
          //         this.router.navigate(["/dashboard"]);
          //       } else if (this.emisUserType == 5 && this.emisUserType1 == 13) {
          //         this.router.navigate(["/dashboard"]);
          //       }else if(this.emisUserType == 5 && (this.emisUserType1 == 7 || this.emisUserType1 == 71)){
          //         this.router.navigate(["/dashboard"]);
          //       } else {
          //         this.router.navigate(["/dashboard"]);
          //       } 
          //     }
          //     // ----------- For TNMSC-----------//
          //     else if (this.emisUserType == 27 && this.emisUserType1 == 1) {
          //       this.router.navigate(["/add-vendor"]);
          //     } else if (
          //       this.emisUserType == 27 &&
          //       (this.emisUserType1 == 2 || this.emisUserType1 == 3)
          //     ) {
          //       this.router.navigate(["/vendor-management"]);
          //     }

          //     //--------------------------------//
          //     else if (this.emisUserType == 14 && this.teacherType == 103) {
          //       this.router.navigate(["/teachers-dashboard"]);
          //     } else if (this.emisUserType == 20) {
          //       this.router.navigate(["/admin"]);
          //     } else if (this.emisUserType == 21) {
          //       this.router.navigate(["/elearn/content/reports"]);
          //     } else if (this.emisUserType == 24) {
          //       this.router.navigate(["/gccdashboard"]);
          //     } else if (this.emisUserType == 26) {
          //       this.router.navigate(["/finance_dashboard"]);
          //     } else if (this.emisUserType == 25) {
          //       this.router.navigate(["/mhtschedule"]);
          //     }else if (this.emisUserType == 31) {
          //       this.router.navigate(["/create-question"]);
          //     }
          //     //  else if(this.emisUserType == 22)
          //     //  {
          //     //   this.router.navigate(['/statedashboard'])
          //     //  }
          //     else {
          //       this.districtId = localStorage.districtId;
          //       this.router.navigate([this.returnUrl]);
          //     }
          //   } else {
          //     this.alertService.error(
          //       'Please Login from "emis.tnschools.gov.in"'
          //     );
          //   }
          // } else {
          //   this.alertService.error(data.message);
          // }
        })
      }
      else{
        this.alertService.error(data.message)
      }
        
    
    }
        );
    } else {
      this.validateFormControl();
    }
  }

  async loadJson() {
    // await fetch('/assets/jsons/appmenu_staging_nestedjson.json').then(res => res.json()).then(res => {
    //   this.menuList = res;
    // });

   

    this.authService.get_menu().subscribe((data) => {
      this.menuList = data.result;
      localStorage.setItem('MenuList', JSON.stringify(this.menuList));
      localStorage.setItem('ModList', JSON.stringify(this.mod2));
    })

     
     
     
    //  this.modapi();
  }
  
  // modapi(){
  //   let UserId = this.loginForm.value.email;
  //   this.authService.ModWebMdlget(UserId).subscribe((data) => {
  //     this.modData = data.result[0].WebInc;
  //     localStorage.setItem('ModList', JSON.stringify(this.modData));
  //   })
  // }


  validateFormControl() {
    Object.keys(this.loginForm.controls).forEach((field) => {
      const control = this.loginForm.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({
          onlySelf: true,
        });
      }
    });
  }



  initValidators() {
    this.pageStage = 1;
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required]),
      newpassword: new UntypedFormControl(""),
      confirmpassword: new UntypedFormControl(""),
      // forgetpassword: new FormControl('', Validators.required),
    });
  }
  validators(){
    // this.loginForm2 = new FormGroup({
    //   username: new FormControl("", [Validators.required]),
    //   // usertype: new FormControl("", [Validators.required]),
    // })

    this.loginForm2 = new UntypedFormGroup({
      username: new UntypedFormControl("", [Validators.required]),
      // usertype: new UntypedFormControl("", [Validators.required]),
    });
  }

  onSubmit(){
    this.showforgotpasswordpage = true;
    this.showloginpage = false;
  }

  Login(){
    this.showloginpage = true;
    this.showforgotpasswordpage = false;
    this.successHide = false
    this.loginForm2.reset()
  }

  submitforgotpassword(){
    this.forgetSubmitted = true;
    if(this.loginForm2.valid){
      this.getMobilEmailFunc()
    }
  }

  getMobilEmailFunc(){
    this.authService.getMobileEmail(this.loginForm2.value.username).subscribe((res) => {
      if(res.dataStatus){
        this.emailId = res.result[0].Email
        this.username = res.result[0].teacher_name
        // this.alertService.success(res.message)
        this.sendMailFunc()
        this.approve()
      } else {
        this.alertService.error(res.error)
      }       
    });
  }

  approve(){
    let data =  {
      "records":{
      "IndexId": "",
      "UserType": null,
      "UserId": this.loginForm2.value.username,
      "Name": "",
      "Ref": "",
      "Email": this.emailId,
      "ApproveStatus": "",
      "ApproverUsername": ""
    }
  }   

    this.authService.forgotpassword(data).subscribe((res) => {
      if(res.dataStatus){
        // this.alertService.success(res.message)
      } else {
        this.alertService.error(res.message)
      }
      this.showforgotpasswordpage = false
      this.successHide = true
    });
  } 

  deleteIndexedDatabase() {
    this.commonservice.deleteindexedDb('DashboardIndexDB').then(res => {
      if (res) {
        console.log('indexdb Deleted' + res)
      }
    })
  }
  
  onLogout() {
    this.idle.stop();
    var path = this.userSessionService.localStorageSessionKey;
    localStorage.removeItem(path);
    this.authService.logOut();
    localStorage.clear();
    sessionStorage.clear();
    this.deleteIndexedDatabase();
  }
  
  sendMailFunc(){
    this.content = "<strong>Dear</strong>" + " " + this.username + "," + "<br>"  + "<br>" +  
    "Your credentials are as follows." + 
    "<br>" + " " + "<br>" +  "Username : " + this.username +  "<br>" + "Passowrd : test@123 <br>" +
     " " + "<br>" + " Please reset your password within 24 hours of receiving this email." +  "<br>" +  "<br>" +
     "Thanks and Regards,"+  "<br>" +" State EMIS Cell, School Education Department,"+  "<br>" +" Government of Tamil Nadu.";

     let data = {
        "tomail" : this.emailId, 
        "subject" : "EMIS - Forgot Password Request",
        "bdtxt" : this.content
      }
  }


}
