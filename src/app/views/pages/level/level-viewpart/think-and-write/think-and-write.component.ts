import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-think-and-write',
  templateUrl: './think-and-write.component.html',
  styleUrls: ['./think-and-write.component.scss']
})
export class ThinkAndWriteComponent implements OnInit {
  @Input() data;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log("thinkand wirte", this.data);
  }

  getIframeUrl() {
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data);
  }

}
