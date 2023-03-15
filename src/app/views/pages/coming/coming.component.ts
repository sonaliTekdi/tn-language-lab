import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
 
@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styleUrls: ['./coming.component.scss']
})
export class ComingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("fast");
      });
    });
  }
}
