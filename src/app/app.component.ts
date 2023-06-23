import { Component, HostListener, OnInit } from '@angular/core';
import { SpinnerComponent } from './views/component/spinnercomponent/spinner.component';
import { TelemetryService } from './telemetry.service';
import { LogsService } from './logs.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerComponent = SpinnerComponent;
  title = 'TNEMIS';

  constructor(
    public telemetryService: TelemetryService,public logsService: LogsService,
    private _router: Router,
    public userService: UserService
  ) {
  }
  @HostListener('document:TelemetryEvent', ['$event'])
  onTelemetryEvent(event) {
    console.log('event===============', event);
  }

   /**
   * dispatch telemetry window unload event before browser closes
   * @param  event
   */
   @HostListener('window:beforeunload', ['$event'])
   public beforeunloadHandler($event) {
     this.telemetryService.end();
   }

  ngOnInit() {
    console.log(environment)
    let users = this.userService.getUser();
    this.telemetryService.initialize({
      context: {
        mode: 'play',  // To identify preview used by the user to play/edit/preview
        authToken: environment.telemetryContext.authToken, // Auth key to make  api calls
        env:environment.telemetryContext.env,
        uid: users?.emis_username || 'anonymous', // Current logged in user id
        pdata: environment.telemetryContext.pdata,
        channel: environment.telemetryContext.channel,
        tags: [ // Defines the tags data
          {"emis_usertype": users?.emis_usertype},
          {"udise_code": users?.udise_code},
          {"class_studying": users?.class_studying_id},
          {"medium_id": users?.medium_id},
          {"school_name": users?.school_name}
        ],
        timeDiff: 0,  // Defines the time difference// Defines the object roll up data
        host: environment.telemetryContext.host,
        apislug: environment.telemetryContext.apislug,
        endpoint: environment.telemetryContext.endpoint
      },
      config: {
      },
      // tslint:disable-next-line:max-line-length
      metadata: {
      }
    });
    //
    const duration = new Date().getTime();
    this.telemetryService.start(duration, this._router.url);
  }
}
