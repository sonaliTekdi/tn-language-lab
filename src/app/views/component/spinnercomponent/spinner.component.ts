import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  progressbarValue: any;
  constructor(
      private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.progressbarValue = 0;  
    setInterval(() => {
        this.progressbarValue += 10;
        if (this.progressbarValue >= 100) {
            this.progressbarValue = 100;
            //clearInterval();
        }
    }, 100);  
  }
}
