import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-play',
  templateUrl: './picture-play.component.html',
  styleUrls: ['./picture-play.component.scss']
})
export class PicturePlayComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
