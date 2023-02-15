import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserSessionService } from './usersession.service';
import { DataService } from './data.service';
import { UserSession } from '../models/usersession';
import * as momenttz from 'moment-timezone';

import {map} from 'rxjs/operators';
import jwtDecode from 'jwt-decode'
import { StorageMap } from '@ngx-pwa/local-storage';

declare var require: any;
const timezone = require('../../../assets/timezones.json');

@Injectable()
export class AuthenticationService {

  private loginbaseUrl = environment.loginApiBaseUrl;
  private baseUrl = environment.apiBaseUrl;
  timeZones: any[];
  sessionData = new UserSession();
  schoolName: string;
  schoolTypeId: string;
  districtId: string;
  cateType:string;
  edn_dist_name: any;
  teacherId:any;
  CattyID:any;

  constructor(
    private storage:StorageMap,
    private http: HttpClient,
    private dataService: DataService,
    private sessionService: UserSessionService) {
    this.getTimeZones();
  }

  School_Registration_API(data:any,refresh:any){
    
    return this.dataService.post('/api/schlReg',data);
  }

  login(username: string, password: string) {
    debugger
    var data;
    var external =username.substring(0,2);
    if( external == 'et'){
      data =   {"records":{"emis_username": username,"emis_password": password
    }}
    var login = this.loginbaseUrl+'/elogin';
    return this.http.post<any>(login, data)
    .pipe(map(user => {

      if (user && user.dataStatus) {
        localStorage.setItem('token',user.records.token);
        const decodedToken:any = jwtDecode(user.records.token);
        this.sessionData.userId = decodedToken['user_id'];
        this.sessionData.username = decodedToken['username'];
        this.sessionData.usertype = decodedToken['user_type'];        
        this.sessionData.usertypeid = decodedToken['usertype'];
        this.sessionData.emisUsertype1 = decodedToken['usertype1'];
        this.sessionData.mod2 = decodedToken['mod2'];
        this.sessionData.teacher_name = decodedToken['teacher_name'];
        this.sessionData.name = decodedToken['name'];
        this.sessionData.designation = decodedToken['designation'];
        this.sessionData.type_teacher = decodedToken['type_teacher'];
        localStorage.setItem('user_id', decodedToken['user_id']);
        localStorage.setItem('username', decodedToken['username']);
        localStorage.setItem('user_type', decodedToken['user_type']);
        localStorage.setItem('usertype', decodedToken['usertype']);
        localStorage.setItem('usertype1', decodedToken['usertype1']);
        //localStorage.setItem('teacherId', this.teacherId);
        this.sessionData.authToken = user.records.token;
        this.sessionService.create(this.sessionData);
      }
      return user;
    }));
    }else{
      // var login = this.loginbaseUrl+'/login';
      var login = this.loginbaseUrl+'/new_login';
      data =   {"records":{"emis_username": username,"emis_password": password
    }}
    return this.http.post<any>(login, data)
      .pipe(map(user => {

        if (user && user.dataStatus) {
          debugger
          localStorage.setItem('token',user.records.token);
          // this.storage.set('token', user.records.token).subscribe(() => {});
          const decodedToken:any = jwtDecode(user.records.token);
       
          debugger
          this.sessionData.schoolName = decodedToken['school_name'];
          this.sessionData.cate_id = decodedToken['cate_id'];
          this.sessionData.manage_id = decodedToken['manage_id'];
          // console.log('this.sessionData.cate_id',this.sessionData.manage_id);
          // 
          this.sessionData.schoolId = decodedToken['school_id'];
          this.sessionData.schoolKeyId = decodedToken['school_key_id'];
          this.sessionData.edu_dist_name = decodedToken['edu_dist_name'];
          this.sessionData.userId = decodedToken['emis_user_id'];
          this.sessionData.username = decodedToken['emis_username'];
          this.sessionData.edn_dist_name = decodedToken['edn_dist_name'];
          this.sessionData.edu_district_id = decodedToken['edu_dist_id'] ? decodedToken['edu_dist_id'] : decodedToken['edu_district_id']
          this.sessionData.usertype = decodedToken['user_type'];        
          this.sessionData.usertypeid = decodedToken['emis_usertype'];
          this.sessionData.schoolTypeId = decodedToken['school_type_id'];
          this.sessionData.lowClass = decodedToken['low_class'];
          this.sessionData.highClass = decodedToken['high_class'];
          this.sessionData.emisUsertype1 = decodedToken['emis_usertype1'];
          this.sessionData.districtId = decodedToken['district_id'];
          this.sessionData.districtName = decodedToken['district_name'];
          this.sessionData.blockId = decodedToken['block_id'];
          this.sessionData.blockName = decodedToken['block_name'];
          this.sessionData.cateType = decodedToken['cate_type'];
          this.sessionData.teacherType = decodedToken['teacher_type'];
          this.sessionData.teacherId = decodedToken['teacher_id'];
          this.sessionData.catty_id = decodedToken['catty_id'];
          this.sessionData.iat=decodedToken['iat'];
          this.sessionData.mod2 = decodedToken['mod2'];
          this.sessionData.teacher_name = decodedToken['teacher_name'];
          this.sessionData.name = decodedToken['name'];
          this.sessionData.designation = decodedToken['designation'];
          this.sessionData.type_teacher = decodedToken['type_teacher'];
                    
          if(decodedToken['emis_usertype'] == 5 ||  decodedToken['emis_usertype'] == 6 || decodedToken['emis_usertype'] == 9 || decodedToken['emis_usertype'] == 10 || decodedToken['emis_usertype'] == 22){
          this.sessionData.offKeyId = decodedToken['school_key_id']; 
          // localStorage.setItem('officeKeyID', decodedToken['school_key_id']);
          
        }
          this.schoolTypeId = decodedToken['school_type_id'];
          this.edn_dist_name = decodedToken['edn_dist_name'];
          this.districtId = decodedToken['district_id'];
          this.CattyID = decodedToken['catty_id'];
          this.sessionData.authToken = user.records.token;
          this.sessionService.create(this.sessionData);
          
        }
        return user;
      }));
    }
    // const data = 'emis_username=' + username + 'emis_password=' + password;
    
  }
  forgotpassword(data:any)
  {
    
    return this.dataService.post('/api/FrgtPswTrkCUD',data);
  }
// new login function
  getMobileEmail(userId) {
    return this.dataService.getData('/api/MblEmailGetSTaff?UserId=' + userId, true);
  }

  getEmail(data:any)
  {
    
    return this.dataService.post('/api/auth/userDetails',data);
  }
  getSelectEmail1(data:any)
  {
    return this.dataService.post('/api/auth/mailDetails',data);
  }
  getSelectEmail2(data:any)
  {
    return this.dataService.post('/api/auth/mailDetails',data);
  }
  get_menu()
  {
    return this.dataService.getData('/api/get_menu', true);
  }
  // ModWebMdlget(UserId)
  // {
  //   return this.dataService.getData('/api/ModWebMdlget?UserId='+UserId, true);
  // }


  isAuthenticated() {
    return (this.sessionService.userTypeId() != 17) && !!this.sessionService.authToken();
  }

  //studentlist for ceo
  sample()
  {
    //  const usertype =  this.sessionData.usertypeid;
    // console.log(usertype);
    
    return (this.sessionService.userTypeId() != 9) && !!this.sessionService.authToken();
  }

  getTimeZones() {
    this.timeZones = timezone.timeZone;
  }

  getBrowserTimeZone(): string {
    const zoneName = momenttz.tz.guess();
    const temptimezone = momenttz.tz(zoneName).zoneAbbr();
    const filterZone = this.timeZones.find(i => i.abbr === temptimezone);
    if (filterZone) {
      return filterZone.value;
    }
    return '';
  }

  clearCachedMenu() {
    this.dataService.clearCache();
  }

  clearSession() {
    this.sessionService.destroy();
    this.clearCachedMenu();
  }

  logOut() {
    this.clearCachedMenu();
    this.sessionService.destroy();
  }

  // sentMail(data) {
  //   return this.dataService.getDataSample2("/sendmail?subject=" + data.subject + "&tomail=" + data.tomail + "&bdtxt=" + data.bdtxt + "", true);
  // }

}
