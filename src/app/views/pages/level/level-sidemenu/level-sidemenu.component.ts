import { Component, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LevelService } from '../level.service';
import * as collection from '../../../../../assets/jsons/level-sidemenu.json';


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any;
    collection = (collection as any);
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
    //this.Items = [collection];
    // let lessonArray = [];
    // let collection = this.levelService.getCollection().subscribe(res => {
    //   res['children'].forEach(lesson => {
    //     lessonArray.push({
    //         label: lesson.name,
    //         command: () => this.levelService.getLesson("lesson1", lesson.id)
    //       })
    //   })
    //   this.Items = lessonArray;
    // });


    this.Items = [
        {
            label: 'Lesson 3: Whats going on?',
            items: [
                { label: 'Describing Actions: What\'s in store today?', command: () => this.levelService.getLesson("lesson1", "introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson1", "warmup")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson1", "pictureplay")},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson1", "openstory")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1", "thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson1", "wordhelp")}
            ]
        },
        {
            label: 'Lesson 5: Seasons and Weather',
            items: [
                { label: 'Weather: What\'s in store today?', command: () =>this.levelService.getLesson("lesson5","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson5","warmUp")},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson5","wordplay")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson5","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson5","wordhelp")}
            ]
        },
        {
            label: 'Lesson 6: Find the Things',
            items: [
                { label: 'Location: What\'s in store today?', command: () => this.levelService.getLesson("lesson6","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson6","warmup")},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson6","wordplay")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson6","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson6","wordhelp")}
            ]
        },
        {
            label: 'Lesson 8: How do you feel today?',
            items: [
                { label: 'Feelings: What\'s in store today?', command: () => this.levelService.getLesson("lesson8","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson8","warmUp")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson8","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson8","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson8","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson8","wordhelp")}
            ]
        },
        {
            label: 'Lesson 10: Review Time',
            items: [
                { label: 'Review: What\'s in store today?', command: () => this.levelService.getLesson("lesson10","review")},
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson10","introduction")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10","pictureplay")},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson10","openstory")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson10","wordhelp")}
            ]
        },
        {
          label: 'Lesson 3: When Amma Went to School',
          items: [
            { label: 'Lesson 3: What\'s in store today?', command: () => this.levelService.getLesson("lesson3-unit2","review")},
              { label: 'Introduction 1', command: () => this.levelService.getLesson("lesson3-unit2","introduction")},
              { label: 'Story Time: When Amma Went to School', command: () => this.levelService.getLesson("lesson3-unit2","storytime")},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2","openstory")},
              { label: 'Introduction 2', command: () => this.levelService.getLesson("lesson3-unit2","introduction2")},
              { label: 'Story Time: Brushing is No Fun!', command: () => this.levelService.getLesson("lesson3-unit2","storytime2")},
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson3-unit2","wordplay")},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2","openstory2")},
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-unit2","thinkandwrite")},
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-unit2","wordhelp")}
          ]
      },
      {
        label: 'Lesson 4: Annual Haircut Day',
        items: [
        { label: 'Lesson 4: What\'s in store today?', command: ()=> this.levelService.getLesson("unit2lesson4","introduction")},
        { label: 'Introduction 1', command: () => this.levelService.getLesson("unit2lesson4","introduction1")},
        { label: 'Story Time:Annual Haircut Day', command: () => this.levelService.getLesson("unit2lesson4","storytime1")},
        { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2lesson4","letstalk1")},
        { label: 'Open Story', command: () =>this.levelService.getLesson("unit2lesson4","openstory")},
        { label: 'Introduction 2', command: () => this.levelService.getLesson("unit2lesson4","introduction2")},
        { label: 'Story Time:The Red Rain Coat', command: () => this.levelService.getLesson("unit2lesson4","storytime2")},
        { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2lesson4","letstalk2")},
        { label: 'Think and Write', command: () => this.levelService.getLesson("unit2lesson4","thinkandwrite")},
        { label: 'Word Help', command: () => this.levelService.getLesson("unit2lesson4","wordhelp")}
        ]
      },
      {
        label: 'Speak with Me',
        items: [
        { label: 'Explore & Learn', command: () => this.levelService.getLesson("speakWithMe","lesson1")},
        { label: 'Play & Learn', command: () => this.levelService.getLesson("speakWithMe","lesson2")},
        { label: 'Learn with a Friend', command: () => this.levelService.getLesson("speakWithMe","lesson3")}
        ]
      }
    ]
  }


}
