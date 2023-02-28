import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-think-and-write',
  templateUrl: './think-and-write.component.html',
  styleUrls: ['./think-and-write.component.scss']
})
export class ThinkAndWriteComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
