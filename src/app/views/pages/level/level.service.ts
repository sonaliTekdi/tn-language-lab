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
  currentLessonData: any;
  nextLessonData: any;
  nextLessonPath = '';
  nextLessonId =  '';
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

  playNextLesson(){
    this.currentLessonData = this.getNextLesson();
    this.getLesson(this.currentLessonData.pid, this.currentLessonData.id);
  }

  getNextLesson(){
    let index = 0;
    let nextId = '';
    this.nextLessonData.forEach(lesson => {
      index++;
      this.currentLessonData = this.currentLessonData ? this.currentLessonData : {id: "lesson1", pid: "speakWithMe"}
      if(this.currentLessonData.id === lesson.id && this.currentLessonData.pid === lesson.pid){
        nextId = this.nextLessonData[index];
      }

    })
    return nextId;
  }

  getLesson(basePath,lessonId){
    this.currentLessonData = {id: lessonId, pid: basePath};
    this.telemetryService.interact(lessonId);
    console.log(lessonId);
    this.getJson(basePath, lessonId).subscribe(res =>
      this.lessonData = res
    );
    console.log(this.lessonData);
    return this.lessonData;
  }
}
