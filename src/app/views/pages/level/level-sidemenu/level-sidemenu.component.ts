import { Component, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LevelService } from '../level.service';
//import * as collection from '../../../../../assets/jsons/level-sidemenu.json';


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any;
    //collection = (collection as any);
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
    let instance = this;
   // this.Items = [collection];
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
        label: 'Speak with Me',
        id:"speakWithMe",
        expanded:true,
        items: [
        { label: 'Explore & Learn', command: () => this.levelService.getLesson("speakWithMe","lesson1"), id: "lesson1", pid: "speakWithMe"},
        { label: 'Play & Learn', command: () => this.levelService.getLesson("speakWithMe","lesson2"), id: "lesson2", pid: "speakWithMe"},
        { label: 'Learn with a Friend', command: () => this.levelService.getLesson("speakWithMe","lesson3"), id: "lesson3", pid: "speakWithMe"}
        ]
      },
        {
            label: 'Lesson 3: Whats going on?',
            id: 'lesson1',
            items: [
                { label: 'Describing Actions: What\'s in store today?', command: () => this.levelService.getLesson("lesson1", "introduction"), id: "introduction", pid: "lesson1"},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson1", "warmup"), id: "warmup", pid: "lesson1"},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson1", "pictureplay"), id: "pictureplay", pid: "lesson1"},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson1", "openstory"), id: "openstory", pid: "lesson1"},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1", "thinkandwrite"), id: "thinkandwrite", pid: "lesson1"},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson1", "wordhelp"), id: "wordhelp", pid: "lesson1"}
            ]
        },
        {
            label: 'Lesson 5: Seasons and Weather',
            id: 'lesson5',
            items: [
                { label: 'Weather: What\'s in store today?', command: () =>this.levelService.getLesson("lesson5","introduction"), id: "introduction", pid: "lesson5"},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson5","warmUp"), id: "warmUp", pid: "lesson5"},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson5","wordplay"), id: "wordplay", pid: "lesson5"},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson5","pictureplay"), id: "pictureplay", pid: "lesson5"},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5","letstalk"), id: "letstalk", pid: "lesson5"},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5","thinkandwrite"), id: "thinkandwrite", pid: "lesson5"},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson5","wordhelp"), id: "wordhelp", pid: "lesson5"}
            ]
        },
        {
            label: 'Lesson 6: Find the Things',
            id:"lesson6",
            items: [
                { label: 'Location: What\'s in store today?', command: () => this.levelService.getLesson("lesson6","introduction"), id: "introduction", pid: "lesson6"},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson6","warmup"), id: "warmup", pid: "lesson6"},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson6","wordplay"), id: "wordplay", pid: "lesson6"},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson6","pictureplay"), id: "pictureplay", pid: "lesson6"},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6","letstalk"), id: "letstalk", pid: "lesson6"},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6","thinkandwrite"), id: "thinkandwrite", pid: "lesson6"},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson6","wordhelp"), id: "wordhelp", pid: "lesson6"}
            ]
        },
        {
            label: 'Lesson 8: How do you feel today?',
            id:"lesson8",
            items: [
                { label: 'Feelings: What\'s in store today?', command: () => this.levelService.getLesson("lesson8","introduction"), id: "introduction", pid: "lesson8"},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson8","warmUp"), id: "warmUp", pid: "lesson8"},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson8","pictureplay"), id: "pictureplay", pid: "lesson8"},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson8","letstalk"), id: "letstalk", pid: "lesson8"},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson8","thinkandwrite"), id: "thinkandwrite", pid: "lesson8"},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson8","wordhelp"), id: "wordhelp", pid: "lesson8"}
            ]
        },
        {
            label: 'Lesson 10: Review Time',
            id:"lesson10",
            items: [
                { label: 'Review: What\'s in store today?', command: () => this.levelService.getLesson("lesson10","review"), id: "review", pid: "lesson10"},
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson10","introduction"), id: "introduction", pid: "lesson10"},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10","pictureplay"), id: "pictureplay", pid: "lesson10"},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson10","openstory"), id: "openstory", pid: "lesson10"},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10","letstalk"), id: "letstalk", pid: "lesson10"},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10","thinkandwrite"), id: "thinkandwrite", pid: "lesson10"},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson10","wordhelp"), id: "wordhelp", pid: "lesson10"}
            ]
        },
        {
          label: 'Lesson 3: When Amma Went to School',
          id:"lesson3-unit2",
          items: [
            { label: 'Lesson 3: What\'s in store today?', command: () => this.levelService.getLesson("lesson3-unit2","review"), id: "review", pid: "lesson3-unit2"},
              { label: 'Introduction 1', command: () => this.levelService.getLesson("lesson3-unit2","introduction"), id: "introduction", pid: "lesson3-unit2"},
              { label: 'Story Time: When Amma Went to School', command: () => this.levelService.getLesson("lesson3-unit2","storytime"), id: "storytime", pid: "lesson3-unit2"},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2","openstory"), id: "openstory", pid: "lesson3-unit2"},
              { label: 'Introduction 2', command: () => this.levelService.getLesson("lesson3-unit2","introduction2"), id: "introduction2", pid: "lesson3-unit2"},
              { label: 'Story Time: Brushing is No Fun!', command: () => this.levelService.getLesson("lesson3-unit2","storytime2"), id: "storytime2", pid: "lesson3-unit2"},
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson3-unit2","wordplay"), id: "wordplay", pid: "lesson3-unit2"},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2","openstory2"), id: "openstory2", pid: "lesson3-unit2"},
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-unit2","thinkandwrite"), id: "thinkandwrite", pid: "lesson3-unit2"},
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-unit2","wordhelp"), id: "wordhelp", pid: "lesson3-unit2"}
          ]
      },
      {
        label: 'Lesson 4: Annual Haircut Day',
        id:"unit2lesson4",
        items: [
        { label: 'Lesson 4: What\'s in store today?', command: ()=> this.levelService.getLesson("unit2lesson4","introduction"), id: "introduction", pid: "unit2lesson4"},
        { label: 'Introduction 1', command: () => this.levelService.getLesson("unit2lesson4","introduction1"), id: "introduction1", pid: "unit2lesson4"},
        { label: 'Story Time:Annual Haircut Day', command: () => this.levelService.getLesson("unit2lesson4","storytime1"), id: "storytime1", pid: "unit2lesson4"},
        { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2lesson4","letstalk1"), id: "letstalk1", pid: "unit2lesson4"},
        { label: 'Open Story', command: () =>this.levelService.getLesson("unit2lesson4","openstory"), id: "openstory", pid: "unit2lesson4"},
        { label: 'Introduction 2', command: () => this.levelService.getLesson("unit2lesson4","introduction2"), id: "introduction2", pid: "unit2lesson4"},
        { label: 'Story Time:The Red Rain Coat', command: () => this.levelService.getLesson("unit2lesson4","storytime2"), id: "storytime2", pid: "unit2lesson4"},
        { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2lesson4","letstalk2"), id: "letstalk2", pid: "unit2lesson4"},
        { label: 'Think and Write', command: () => this.levelService.getLesson("unit2lesson4","thinkandwrite"), id: "thinkandwrite", pid: "unit2lesson4"},
        { label: 'Word Help', command: () => this.levelService.getLesson("unit2lesson4","wordhelp"), id: "wordhelp", pid: "unit2lesson4"}
        ]
      }
    ]

    this.levelService.nextLessonData = [];
      this.Items.forEach(lesson => {
        lesson.items.forEach(topic => {
            this.levelService.nextLessonData.push({id: topic.id , pid: topic.pid})
        })
      })

      this.levelService.getLesson("speakWithMe","lesson1")

      setTimeout(function(){
        console.log(instance.levelService.nextLessonData);
      }, 2000)


  }
}
