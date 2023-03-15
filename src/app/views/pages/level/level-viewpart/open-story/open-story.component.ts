import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-open-story',
  templateUrl: './open-story.component.html',
  styleUrls: ['./open-story.component.scss']
})
export class OpenStoryComponent implements OnInit {
  @Input() data;
  constructor(private sanitizer: DomSanitizer, private location: Location, private locationStrategy: LocationStrategy) { }

  ngOnInit(): void {
  }

  getIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("open-story/Open Story.html?file="+ this.locationStrategy.getBaseHref() + this.data.iframe);
  }

}
