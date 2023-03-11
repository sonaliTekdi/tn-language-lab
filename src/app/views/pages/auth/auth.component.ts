import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit {

  
  ngOnInit(): void {
  }

  isLoading: boolean;

  constructor(private router: Router) { 

    // Spinner for lazyload modules
    router.events.forEach((event) => { 
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });

  }
  }
