import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery'

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
    $('.moreless-button').click(function() {
      $('.moretext').slideToggle();
      if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
      } else {
      $(this).text("Read more")
      }
       });
       
       $(document).ready(function(){
        $("#eng").click(function(){
          localStorage.setItem('lang','en');
          document.location.reload();
        }); 
        $("#de").click(function(){
          localStorage.setItem('lang','ta');
          document.location.reload();
        });
        }); 
        $(document).ready(function(){
          $("#flip").click(function(){
            $("#panel").slideToggle("fast");
          });
        });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }


  customOptions78: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
   
    navText: ['<i class="bi bi-chevron-compact-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1,
        nav: false,
        dots: true,
      },
      740: {
        items: 1
      },
      940: {
        items: 1,
        nav: true,
        dots: false,
      }
    },
  
  }

  goToLevelAndRouting()
  {
    this.router.navigate(["level"])
  }
  scrolltoDiv(id)
  {
    document.getElementById(id).scrollIntoView()

  }
}
