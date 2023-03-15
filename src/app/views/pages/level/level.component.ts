import { Component, OnInit } from '@angular/core';
import { LevelService } from './level.service';
import { TelemetryService } from '../../../telemetry.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  constructor(public levelService: LevelService,  public telemetryService: TelemetryService) { }

  ngOnInit(): void {
  }

  gotoNextpage(){
    this.levelService.viewPage = this.levelService.viewPage + 1;
  }

}
