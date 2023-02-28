import { Injectable } from '@angular/core';
import * as collection from '../../../../assets/jsons/level-sidemenu.json'

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  viewPage = 1;
  data = '';
  collection = (collection as any);
  constructor() { }

  getCollection(id){

    return collection;

  }

  getData(id){
    
  }

  getLesson(id){
    
  }
}
