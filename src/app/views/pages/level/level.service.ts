import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelemetryService } from '../../../telemetry.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  viewPage = 1;
  lessonData = {};
  data = '';
  path;
  mechanic :any;
  constructor(private httpService: HttpClient, public telemetryService: TelemetryService) { }

  getJson(basePath,id) {
    return this.httpService.get('../../../../assets/lessons/'+ basePath +'/'+id+'/'+id+'.json');
  }

  getCollection(){
    return this.httpService.get('../../../../assets/jsons/collection.json');
  }

  getData(id){

  }

  getLesson(basePath,lessonId){
    this.telemetryService.interact(lessonId);
    console.log(lessonId);
    this.getJson(basePath, lessonId).subscribe(res =>
      this.lessonData = res
    );
    console.log(this.lessonData);
    return this.lessonData;
  }
}
