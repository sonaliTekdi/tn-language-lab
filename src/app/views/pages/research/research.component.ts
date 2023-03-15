import { Component, OnInit } from '@angular/core';
import $ from 'jquery'

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("fast");
      });
    });
  }

}
