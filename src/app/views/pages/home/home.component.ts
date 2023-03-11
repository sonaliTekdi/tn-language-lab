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
          $(".tamil").fadeOut();
           $(".english").fadeIn();
        }); 
        $("#de").click(function(){
           $(".english").hide();
          $(".tamil").show();
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
    touchDrag: false,
    pullDrag: false,
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

  goToLevelAndRouting()
  {
    this.router.navigate(["level"])
  }

}
