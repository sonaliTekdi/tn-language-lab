import { Component, OnInit, Inject, Renderer2, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { STATE_MENU_TEMP, BEO_MENU, BLK_MENU, BRTE_MENU, CEO_MENU, DEO_MENU, DISTRICT_MENU, HEALTH_LOGIN, JD_SCERT_MENU, STATE_HEALTH, STATE_MENU, SWO_MENU, RTE_VERIFY_MENU, DISTRICT_MENU_SPORT, DEIC_MENU, DOTE_MENU, DET_MENU, OSD_MENU } from './menu';
import { MenuItem } from './menu.model';
// import { AuthenticationService } from 'src/app/core/services/authentication.service';

// import { UserSessionService } from 'src/app/core/services/usersession.service';
import { Idle } from '@ng-idle/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems:  any[];
  userName: string;
  emisUserType: number;
  emisUserType1: number;
  tempmod1: any[];
  manuarray: any;
  finalmenu: any;
  spliceMod1: any[];
  finalsubmenu: any;
  run: boolean;
  teacherName: any;
  Name: any;
  designation: any;
  type_teacher: any;

  /**
  * Fixed header menu on scroll
  */
  @HostListener('window:scroll', ['$event']) getScrollHeight() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      let header: HTMLElement = document.querySelector('.horizontal-menu') as HTMLElement;
      if (window.pageYOffset >= 60) {
        header.parentElement!.classList.add('fixed-on-scroll')
      } else {
        header.parentElement!.classList.remove('fixed-on-scroll')
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    // private authService: AuthenticationService,
    private idle: Idle,
    // private userSessionService: UserSessionService,

  ) {
    // this.userName = this.userSessionService.userName();
    // this.Name = this.userSessionService.name();
    // this.designation = this.userSessionService.designation();
    // this.type_teacher = this.userSessionService.type_teacher();
    // this.teacherName = this.userSessionService.teacherName();
    // this.emisUserType = this.userSessionService.userTypeId();
    // this.emisUserType1 = this.userSessionService.emisUsertype1();
  }

  ngOnInit(): void {
    if(this.Name){
      this.Name = this.Name;
    }
    if(this.teacherName){
      this.Name = this.teacherName;
    }
    if(this.designation){
      this.designation = this.designation;
    }
    if(this.type_teacher){
      this.designation = this.type_teacher;
    }
    // if (this.emisUserType == 5 && this.emisUserType1 == 13) {
      var retrievedObject = localStorage.getItem('MenuList');
      var parsedObject = JSON.parse(retrievedObject);
      // var parsedObject=[];
      //  fetch('/assets/jsons/appmenu_staging_nestedjson.json').then(res => res.json()).then(res => {
      //   console.log(res,);
      // parsedObject = res;
    //   this.run=true
    // });

  this.menuItems = parsedObject;
  this.menuItems = [];
  var retrievedObject1 = localStorage.getItem('ModList');
  var parsedObject1 = JSON.parse(retrievedObject1);
  
  // this.tempmod1 = [1,2,4,5,13,14,15,16,17,18,19,20,21];
  this.tempmod1 = parsedObject1.split(",");
  this.spliceMod1=this.tempmod1
  this.manuarray = []
  this.finalmenu = []

  let final=new Array();
  let parent=new Object();
  this.finalmenu=this.getmenu(parsedObject,this.tempmod1);
  //this.finalmenu=final;
  this.menuItems = this.finalmenu;
 
  this.menuItems = this.menuItems.sort((a,b)=> a.sequence_id-b.sequence_id);
  //  this.menuItems.sort((a, b) => {
  //   if (a.sequence_id < b.sequence_id)
  //   return -1;
  //   if (a.sequence_id > b.sequence_id)
  //   return 1;
  //   return 0;
  // });
  
/*
      for (let i = 0; i < this.tempmod1.length; i++) {
        for (let j = 0; j < parsedObject.length; j++) {
          if (this.tempmod1[i] == parsedObject[j].id) {
            var submenus = parsedObject[j].subMenus
            // this.manuarray.push(parsedObject[j])
            if(submenus!=undefined)
            {
              this.manuarray.push(parsedObject[j])
              //   for(let k=0; k<parsedObject[j].subMenus[0].subMenuItems.length; k++){
              //     if (this.tempmod1[i] == parsedObject[j].subMenus[0].subMenuItems[k].parent_id) {
                    
              //       var submenu = parsedObject[j].subMenus[0].subMenuItems.push(parsedObject[j].subMenus[0].subMenuItems[k])
              //   console.log(submenu, "submenu")

              //   this.finalmenu.push(submenu)
  
              //       console.log(parsedObject[j].subMenus[0].subMenuItems[k],"parsedObject[j].subMenus[0].subMenuItems[k]")
              //     }
              // }
            }
            else{
              this.finalmenu.push(parsedObject[j])
              var x= this.spliceMod1.indexOf(parsedObject[j].id)
              this.spliceMod1.splice(x,1)
            
            }
          }

        }
      }

        


      for (let ind = 0; ind < this.manuarray.length; ind++) {
       var submenusarray=[]
      //  console.log(this.spliceMod1,"this.spliceMod1")
       var submenuslength=this.manuarray[ind].subMenus[0].subMenuItems.length
      //  console.log(submenuslength,"submenuslength")
       for (let z = 0; z < submenuslength; z++) {
        console.log(this.manuarray[ind].subMenus[0].subMenuItems[z]);
        var submenucontent=this.manuarray[ind].subMenus[0].subMenuItems[z]
        console.log(submenucontent,"ttt")
         
        for (let y = 0; y <this.spliceMod1.length; y++) {
        //  console.log(this.spliceMod1[y],submenucontent.id,"jhgjhgj");
        if(this.spliceMod1[y]==submenucontent.id)
        {
              var submenus=submenucontent.id
               submenusarray.push(submenus)
               console.log(submenusarray,"submenusarray")
        }
          
        }
        

        submenusarray.forEach(element => {
          var x1= this.manuarray[ind].subMenus[0].subMenuItems.indexOf(element)
          this.finalsubmenu =this.manuarray[ind].subMenus[0].subMenuItems.splice(x1,1)
        
         });
      
        this.finalmenu.push(this.finalsubmenu)
        
       }


     
       
       }
    
        
      
      
      console.log(this.finalmenu,"this.finalmenu")
      // console.log( this.spliceMod1,"this.spliceMod1")


      // for (let k = 0; k < this.manuarray.length; k++) {
      //   var submenus = this.manuarray[k].subMenus
      //   if (submenus != undefined) {
      //     for (let l = 0; l < this.manuarray[k].subMenus[0].subMenuItems.length; l++) {

      //       console.log(this.manuarray[k].subMenus[0].subMenuItems,"tet")
      //     }
      //   }
        
      // }
      // for (let k = 0; k < this.manuarray.length; k++) {
      //   var submenus = this.manuarray[k].subMenus
      //   if (submenus != undefined) {
      //     for (let l = 0; l < this.tempmod1.length; l++) {
      //       console.log(this.manuarray,this.tempmod1);
      //       for (let m = 0; m < this.manuarray[k].subMenus[0].subMenuItems.length; m++) {
      //         console.log("tet",this.manuarray[k].subMenus[0].subMenuItems[m].id,this.tempmod1[l]);
      //         console.log
      //       //   if (this.tempmod1[l] == this.manuarray[k].subMenus[0].subMenuItems[m].id || this.manuarray[k].subMenus[0].subMenuItems[m].isTitle == true) {

      //       //     var submenu = this.manuarray[k].subMenus[0].subMenuItems.push(this.manuarray[k].subMenus[0].subMenuItems[m])
      //       //     console.log(submenu, "submenu")

      //       //     this.finalmenu.push(submenu)

      //       //   }
      //       }
      //     }
      //   }
      //   else[
      //     this.finalmenu.push(this.manuarray[k])
      //   ]
      // }



      // let splitedModValue = this.mod1[0].menu.split(',');
      // let showModuleLists = new Array();
      //   parsedObject.forEach(function (menuvalue) {
      //     splitedModValue.forEach(function (modvalue) {
      //       if(menuvalue.sub_menus){
      //         for(let i=0; i < menuvalue.sub_menus.length; i++){
      //           if (menuvalue.sub_menus.child_id == +modvalue) {
      //             // showModuleLists.push(menuvalue[i].sub_menus);
      //           }
      //         }
      //       }
      //       else{
      //         if (menuvalue.id == +modvalue) {
      //           showModuleLists.push(menuvalue);
      //         }
      //       }

      //     })
      //   })
      //   this.menuItems = [];
      //   this.menuItems = showModuleLists;
      //   console.log("www",this.menuItems);
      */
      this.checkPathName();
    // }

  //   else if ((this.emisUserType == 5 && (this.emisUserType1 == 1 || this.emisUserType1 == 3))) {
  //     if (this.userName == 'kt1_state' || this.userName == 'kt2_state' || this.userName == 'kt3_state') {
  //       this.menuItems = STATE_MENU_TEMP;
  //       this.checkPathName();
  //     }
  //     else {
  //       this.menuItems = STATE_MENU;
  //       this.checkPathName();
  //     }

  //   }

  //   else if ((this.emisUserType == 5 && this.emisUserType1 == 7)) {
  //     this.menuItems = JD_SCERT_MENU;
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 3 && this.emisUserType1 == 1)) {
  //     this.menuItems = DISTRICT_MENU
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 3 && this.emisUserType1 == 2)) {
  //     this.menuItems = DISTRICT_MENU_SPORT
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 9 && (this.emisUserType1 == 1 || this.emisUserType1 == 2))) {
  //     this.menuItems = CEO_MENU
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 6 && (this.emisUserType1 == 1 || this.emisUserType1 == 2 || this.emisUserType1 == 3))) {
  //     this.menuItems = BEO_MENU
  //     this.checkPathName();
  //     // this.menuItems[1].subMenus[1].subMenuItems[2].visible = this.emisUserType==6 && this.emisUserType1==1 ? true : false
  //   }

  //   else if ((this.emisUserType == 2 && this.emisUserType1 == 1)) {
  //     this.menuItems = BLK_MENU
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 10 && this.emisUserType1 == 3)) {
  //     this.menuItems = DEO_MENU
  //     this.checkPathName();
  //   }

  //   else if ((this.emisUserType == 14 && this.emisUserType1 == 90002)) {
  //     this.menuItems = BRTE_MENU
  //     this.checkPathName();
  //   }
  //   else if ((this.emisUserType == 27 && (this.emisUserType1 == 1 || this.emisUserType1 == 2 ||
  //     this.emisUserType1 == 3 || this.emisUserType1 == 4 || this.emisUserType1 == 9))) {
  //     this.menuItems = HEALTH_LOGIN
  //     // this.checkPathName();
  //     /*this.menuItems[0].visible = this.emisUserType==27 && this.emisUserType1==3 ? true : false
  //     this.menuItems[1].visible = this.emisUserType==27 && this.emisUserType1==3 ? true : false
  //     this.menuItems[2].visible = this.emisUserType==27 && this.emisUserType1==3 ? true : false*/
  //     this.menuItems[0].visible = this.emisUserType == 27 && (this.emisUserType1 == 3 || this.emisUserType1 == 9) ? true : false
  //     this.menuItems[1].visible = this.emisUserType == 27 && (this.emisUserType1 == 3 || this.emisUserType1 == 9) ? true : false
  //     this.menuItems[2].visible = this.emisUserType == 27 && (this.emisUserType1 == 3 || this.emisUserType1 == 9) ? true : false
  //   }
  //   else if (this.emisUserType == 27 && this.emisUserType1 == 8) {
  //     this.menuItems = SWO_MENU;
  //     this.checkPathName();
  //   }
  //   // else if(this.emisUserType==27 && this.emisUserType1==9){
  //   // this.checkPathName();
  //   // }

  //   else if ((this.emisUserType == 5 && (this.emisUserType1 == 10 ||
  //     this.emisUserType1 == 11))) {
  //     this.menuItems = STATE_HEALTH;
  //     // this.checkPathName();
  //   } else if (this.emisUserType == 32) {
  //     this.menuItems = RTE_VERIFY_MENU;
  //     this.checkPathName();
  //   } else if (this.emisUserType == 27 && this.emisUserType1 == 7) {
  //     this.menuItems = DEIC_MENU
  //     this.checkPathName()
  //   }
  //   else if ((this.emisUserType == 35 && (this.emisUserType1 == 1 || this.emisUserType1 == 2))) {
  //     if (this.emisUserType1 == 1) {
  //       this.menuItems = DOTE_MENU
  //       this.checkPathName();
  //     }
  //     else {
  //       this.menuItems = DET_MENU
  //       this.checkPathName();
  //     }
  //   }

  //   // else{
  //   // this.menuItems = MENU;
  //   // }


  //   /**
  //   * closing the header menu after route change in tablet/mobile devices
  //   */
  //   if (window.matchMedia('(max-width: 991px)').matches) {
  //     this.router.events.forEach((event) => {
  //       if (event instanceof NavigationEnd) {
  //         document.querySelector('.horizontal-menu .bottom-navbar')!.classList.remove('header-toggled');
  //       }
  //     });
  //   }
  }

  getmenu(menu,mod_item){
    let final=new Array();
    
    for(let i in menu){
      var test = []
      if(typeof menu[i].subMenus!=='undefined' &&  menu[i].subMenus.length>0){
        let index = mod_item.findIndex(obj=> obj == menu[i].id)
       if(index>-1) {
        for(let j=0;j<menu[i].subMenus.length;j++) {
          
          let smenu=[{subMenuItems:this.getSubmenu(menu[i].subMenus[j].subMenuItems,mod_item,j)}];
          if(typeof smenu ==='object'){
            let tmp=new Object();
            for(let x in menu[i]){
              if(x!='subMenus'){
                tmp[x]=menu[i][x];
              }
            }
            test.push(smenu);
            if(menu[i].subMenus.length == j+1){
              tmp['subMenus']=test;
              final.push(tmp);
            }
            
          }
        }
       }
      } else {
        for(let l in mod_item){
          if(menu[i].id==mod_item[l]){
            final.push(menu[i]);
          }
            
        }
      }
    }
    
    return final;
  }

  getSubmenu(menu,mod_item,index:any){
    let matchs=new Array();
    let tmp1=[];
    for(let i in menu){
      if(typeof menu[i].subMenus!=='undefined' &&  menu[i].subMenus.length>0){
        let smenu=this.getSubmenu(menu[i].subMenus[index].subMenuItems,mod_item,index);
        if(typeof smenu ==='object'){
          let tmp=new Object();
          for(let x in menu[i]){
            if(x!='subMenus'){
              tmp[x]=menu[i][x];
            }
          } 
          tmp['subMenus']=smenu;
          matchs.push(tmp);
        }
      } else {
        for(let l in mod_item){
          if(menu[i].id==mod_item[l])
          matchs.push(menu[i]);
        }
      }
    }
    return matchs;
  }

  checkPathName() {
    var pathName = window.location.pathname;
    var check = false;
    if (pathName == '/reset-password') {
      check = true;
    } else {
      this.menuItems.map((res1) => {
        if (pathName == res1.link) {
          check = true;
        }
        if (res1.subMenus) {
          res1.subMenus.map((res2) => {
            res2[0].subMenuItems.map((res3) => {
              if (pathName == res3.link) {
                check = true;
              }
              if (
                ((this.emisUserType == 5 || this.emisUserType == 3 || this.emisUserType == 9 || this.emisUserType == 10 || this.emisUserType == 2 || this.emisUserType == 6) &&
                  pathName.includes('/student-attendance') ||
                  pathName.includes('/component') ||
                  pathName.includes('/component/school-level-screening') ||
                  pathName.includes('/dashboard/oosc-trace') ||
                  pathName.includes('/approval/udise-approval/') ||
                  pathName.includes('/inbox/state-message') ||
                  pathName.includes('/competition'))
                // pathName.includes('/dashboard')

              ) {
                check = true;
              }
            });
          });
        }
      });
    }
    if (!check) {
      // this.router.navigate(['no-access']);
      // this.onLogout();
    }
  }


  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subMenus !== undefined ? item.subMenus.length > 0 : false;
  }

  /**
   * Logout
   */
  onLogout() {
    this.idle.stop();
    // this.authService.logOut();
    this.router.navigate(['/auth/login']);
    localStorage.removeItem("token");
    localStorage.clear();
  }

  resetpassword() {
    this.router.navigate(['reset-password'])
  }

  /**
   * Toggle header menu in tablet/mobile devices
   */
  toggleHeaderMenu() {
    document.querySelector('.horizontal-menu .bottom-navbar')!.classList.toggle('header-toggled');
  }

  menuclose() {
    this.toggleHeaderMenu();
  }

  changeTheme() {
    document.documentElement.style.setProperty('--nav-primary-color', '#FFF');
  }

  removeFocus(evt) {
    //$(".submenu").css("display", "none")

  }

  addFocus(evt) {
    // $(".submenu").css("display", "none")
    // var string = '.click-style' + evt
    // $(string).css("display", "block")

  }

}
