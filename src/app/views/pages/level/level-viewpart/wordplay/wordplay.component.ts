import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordplay',
  templateUrl: './wordplay.component.html',
  styleUrls: ['./wordplay.component.scss']
})
export class WordplayComponent implements OnInit {
  @Input() wordplayData;
  constructor() { }  
  ngOnInit(): void {
  }

}
