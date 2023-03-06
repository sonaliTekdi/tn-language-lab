import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

@HostListener('window:message',['$event'])
onMessage(e)
{
if (e.origin!="http://localhost:4200")
  {
  return false;
  }
if (e.data.for=="user")
  {
    this.router.navigate(["level"])
  }
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLevelAndRouting()
  {
    this.router.navigate(["level"])
  }

}
