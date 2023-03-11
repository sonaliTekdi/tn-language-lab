import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LevelService } from '../level.service';
//import * as collection from '../../../../../assets/jsons/level-sidemenu.json';


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
  Items: any;
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
        id: "speakWithMe",
        expanded: true,
        items: [
          { label: 'Explore & Learn', command: () => this.levelService.getLesson("speakWithMe", "lesson1"), id: "lesson1", pid: "speakWithMe" },
          { label: 'Play & Learn', command: () => this.levelService.getLesson("speakWithMe", "lesson2"), id: "lesson2", pid: "speakWithMe" },
          { label: 'Learn with a Friend', command: () => this.levelService.getLesson("speakWithMe", "lesson3"), id: "lesson3", pid: "speakWithMe" }
        ]
      },
      {
        label: 'Level 1',
        id: 'unit1',
        items: [
          {
            label: 'Whats going on?',
            id: 'lesson1',
            items: [
              { label: 'Describing Actions: What\'s in store today?', command: () => this.levelService.getLesson("lesson1", "introduction"), id: "introduction", pid: "lesson1" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson1", "warmup"), id: "warmup", pid: "lesson1" },
              // { label: 'Picture Play', command: () => this.levelService.getLesson("lesson1", "pictureplay"), id: "pictureplay", pid: "lesson1" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson1", "openstory"), id: "openstory", pid: "lesson1" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1", "thinkandwrite"), id: "thinkandwrite", pid: "lesson1" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson1", "wordhelp"), id: "wordhelp", pid: "lesson1" }
            ]
          },
          {
            label: 'Seasons and Weather',
            id: 'lesson5',
            items: [
              { label: 'Weather: What\'s in store today?', command: () => this.levelService.getLesson("lesson5", "introduction"), id: "introduction", pid: "lesson5" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson5", "warmUp"), id: "warmUp", pid: "lesson5" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson5", "wordplay"), id: "wordplay", pid: "lesson5" },
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson5", "pictureplay"), id: "pictureplay", pid: "lesson5" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5", "letstalk"), id: "letstalk", pid: "lesson5" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5", "thinkandwrite"), id: "thinkandwrite", pid: "lesson5" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5", "wordhelp"), id: "wordhelp", pid: "lesson5" }
            ]
          },
          {
            label: 'Find the Things',
            id: "lesson6",
            items: [
              { label: 'Location: What\'s in store today?', command: () => this.levelService.getLesson("lesson6", "introduction"), id: "introduction", pid: "lesson6" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson6", "warmup"), id: "warmup", pid: "lesson6" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson6", "wordplay"), id: "wordplay", pid: "lesson6" },
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson6", "pictureplay"), id: "pictureplay", pid: "lesson6" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6", "letstalk"), id: "letstalk", pid: "lesson6" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6", "thinkandwrite"), id: "thinkandwrite", pid: "lesson6" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6", "wordhelp"), id: "wordhelp", pid: "lesson6" }
            ]
          },
          {
            label: 'How do you feel today?',
            id: "lesson8",
            items: [
              { label: 'Feelings: What\'s in store today?', command: () => this.levelService.getLesson("lesson8", "introduction"), id: "introduction", pid: "lesson8" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson8", "warmUp"), id: "warmUp", pid: "lesson8" },
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson8", "pictureplay"), id: "pictureplay", pid: "lesson8" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson8", "letstalk"), id: "letstalk", pid: "lesson8" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson8", "thinkandwrite"), id: "thinkandwrite", pid: "lesson8" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson8", "wordhelp"), id: "wordhelp", pid: "lesson8" }
            ]
          },
          {
            label: 'Free Time Activities',
            id: "lesson9",
            items: [
              { label: 'Leisure: What\'s in store today?', command: () => this.levelService.getLesson("lesson9", "introduction"), id: "introduction", pid: "lesson9" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson9", "warmUp"), id: "warmUp", pid: "lesson9" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson9", "pictureplay"), id: "pictureplay", pid: "lesson9" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson9", "openstory"), id: "openstory", pid: "lesson9" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson9", "thinkandwrite"), id: "thinkandwrite", pid: "lesson9" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson9", "wordhelp"), id: "wordhelp", pid: "lesson9" }
            ]
          }
        ]
      },
      {
        label: "Level 2",
        id: 'unit2',
        items: [
          {
            label: 'Under My Bed',
            id: "lesson1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson1-unit2", "review"), id: "review", pid: "lesson1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson1-unit2", "introduction"), id: "introduction", pid: "lesson1-unit2" },
              { label: 'Story Time: Under my Bed', command: () => this.levelService.getLesson("lesson1-unit2", "storytime"), id: "storytime", pid: "lesson1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson1-unit2", "letstalk"), id: "letstalk", pid: "lesson1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson1-unit2", "wordhelp"), id: "wordhelp", pid: "lesson1-unit2" }
            ]
          },
          {
            label: 'Ramya\'s Stars',
            id: "lesson2-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson2-unit2", "review"), id: "review", pid: "lesson2-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson2-unit2", "introduction"), id: "introduction", pid: "lesson2-unit2" },
              { label: 'Story Time: Ramya\'s Stars', command: () => this.levelService.getLesson("lesson2-unit2", "storytime"), id: "storytime", pid: "lesson2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson2-unit2", "letstalk"), id: "letstalk", pid: "lesson2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson2-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson2-unit2", "wordhelp"), id: "wordhelp", pid: "lesson2-unit2" }
            ]
          },
          {
            label: 'When Amma Went to School',
            id: "lesson3-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson3-unit2", "introduction"), id: "introduction", pid: "lesson3-unit2" },
              { label: 'Story Time: When Amma Went to School', command: () => this.levelService.getLesson("lesson3-unit2", "storytime"), id: "storytime", pid: "lesson3-unit2" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2", "openstory"), id: "openstory", pid: "lesson3-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson3-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-unit2", "wordhelp"), id: "wordhelp", pid: "lesson3-unit2" }
            ]
          },
          {
            label: 'Brushing is No Fun!',
            id: "lesson3-1-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson3-1-unit2", "introduction2"), id: "introduction2", pid: "lesson3-1-unit2" },
              { label: 'Story Time: Brushing is No Fun!', command: () => this.levelService.getLesson("lesson3-1-unit2", "storytime2"), id: "storytime2", pid: "lesson3-1-unit2" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson3-1-unit2", "wordplay"), id: "wordplay", pid: "lesson3-1-unit2" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-1-unit2", "openstory2"), id: "openstory2", pid: "lesson3-1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-1-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson3-1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-1-unit2", "wordhelp"), id: "wordhelp", pid: "lesson3-1-unit2" }
            ]
          },
          {
            label: 'Little Painters',
            id: "lesson5_1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson5_1-unit2", "review"), id: "review", pid: "lesson5_1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson5_1-unit2", "introduction"), id: "introduction", pid: "lesson5_1-unit2" },
              { label: 'Story Time: Little Painters!', command: () => this.levelService.getLesson("lesson5_1-unit2", "storytime"), id: "storytime", pid: "lesson5_1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5_1-unit2", "letstalk"), id: "letstalk", pid: "lesson5_1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5_1-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson5_1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5_1-unit2", "wordhelp"), id: "wordhelp", pid: "lesson5_1-unit2" }
            ]
          },
          {
            label: 'Bluie\'s World',
            id: "lesson5_2-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson5_2-unit2", "introduction"), id: "introduction", pid: "lesson5_2-unit2" },
              { label: 'Story Time: Bluie\'s World!', command: () => this.levelService.getLesson("lesson5_2-unit2", "storytime"), id: "storytime", pid: "lesson5_2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5_2-unit2", "letstalk"), id: "letstalk", pid: "lesson5_2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5_2-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson5_2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5_2-unit2", "wordhelp"), id: "wordhelp", pid: "lesson5_2-unit2" }
            ]
          },
          {
            label: 'Samira\'s Awful Lunch',
            id: "lesson7-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson7-unit2", "introduction2"), id: "introduction2", pid: "lesson7-unit2" },
              { label: 'Story Time: Samira\'s Awful Lunch', command: () => this.levelService.getLesson("lesson7-unit2", "storytime2"), id: "storytime2", pid: "lesson7-unit2" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson7-unit2", "wordplay"), id: "wordplay", pid: "lesson7-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson7-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson7-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson7-unit2", "wordhelp"), id: "wordhelp", pid: "lesson7-unit2" }
            ]
          },
          {
            label: 'Goodnight Tinku!',
            id: "lesson6_1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson6_1-unit2", "review"), id: "review", pid: "lesson6_1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson6_1-unit2", "introduction"), id: "introduction", pid: "lesson6_1-unit2" },
              { label: 'Story Time: Goodnight Tinku!', command: () => this.levelService.getLesson("lesson6_1-unit2", "storytime"), id: "storytime", pid: "lesson6_1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6_1-unit2", "letstalk"), id: "letstalk", pid: "lesson6_1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6_1-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson6_1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6_1-unit2", "wordhelp"), id: "wordhelp", pid: "lesson6_1-unit2" }
            ]
          },
          {
            label: 'The Boy and the Drum',
            id: "lesson6_2-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson6_2-unit2", "introduction"), id: "introduction", pid: "lesson6_2-unit2" },
              { label: 'Story Time: The Boy and the Drum', command: () => this.levelService.getLesson("lesson6_2-unit2", "storytime"), id: "storytime", pid: "lesson6_2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6_2-unit2", "letstalk"), id: "letstalk", pid: "lesson6_2-unit2" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson6_2-unit2", "clixtime"), id: "clixtime", pid: "lesson6_2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6_2-unit2", "thinkandwrite"), id: "thinkandwrite", pid: "lesson6_2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6_2-unit2", "wordhelp"), id: "wordhelp", pid: "lesson6_2-unit2" }
            ]
          }
        ]
      }
    ]

    this.levelService.nextLessonData = [];
    this.Items.forEach(lesson => {
      lesson.items.forEach(topic => {
        if (!topic.items){
          this.levelService.nextLessonData.push({ id: topic.id, pid: topic.pid })
        }else{
          topic.items.forEach(chapter => {
            this.levelService.nextLessonData.push({ id: chapter.id, pid: chapter.pid })
          })
        }

      })
    })

    this.levelService.getLesson("speakWithMe", "lesson1")

    setTimeout(function () {
      console.log(instance.levelService.nextLessonData);
    }, 2000)
  }

  setLesson(){

  }
}




//---------Extra lessons----------
  // {
  //   label: 'Review Time',
  //   id: "lesson10",
  //   items: [
  //     { label: 'Review: What\'s in store today?', command: () => this.levelService.getLesson("lesson10", "review"), id: "review", pid: "lesson10" },
  //     { label: 'Introduction', command: () => this.levelService.getLesson("lesson10", "introduction"), id: "introduction", pid: "lesson10" },
  //     { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10", "pictureplay"), id: "pictureplay", pid: "lesson10" },
  //     { label: 'Open Story', command: () => this.levelService.getLesson("lesson10", "openstory"), id: "openstory", pid: "lesson10" },
  //     { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10", "letstalk"), id: "letstalk", pid: "lesson10" },
  //     { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10", "thinkandwrite"), id: "thinkandwrite", pid: "lesson10" },
  //     { label: 'Word Help', command: () => this.levelService.getLesson("lesson10", "wordhelp"), id: "wordhelp", pid: "lesson10" }
  //   ]
  // }


  // {
  //   label: 'Annual Haircut Day',
  //   id: "unit2lesson4",
  //   items: [
  //     { label: 'What\'s in store today?', command: () => this.levelService.getLesson("unit2lesson4", "introduction"), id: "introduction", pid: "unit2lesson4" },
  //     { label: 'Introduction 1', command: () => this.levelService.getLesson("unit2lesson4", "introduction1"), id: "introduction1", pid: "unit2lesson4" },
  //     { label: 'Story Time:Annual Haircut Day', command: () => this.levelService.getLesson("unit2lesson4", "storytime1"), id: "storytime1", pid: "unit2lesson4" },
  //     { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2lesson4", "letstalk1"), id: "letstalk1", pid: "unit2lesson4" },
  //     { label: 'Open Story', command: () => this.levelService.getLesson("unit2lesson4", "openstory"), id: "openstory", pid: "unit2lesson4" },
  //     { label: 'Think and Write', command: () => this.levelService.getLesson("unit2lesson4", "thinkandwrite"), id: "thinkandwrite", pid: "unit2lesson4" },
  //     { label: 'Word Help', command: () => this.levelService.getLesson("unit2lesson4", "wordhelp"), id: "wordhelp", pid: "unit2lesson4" }
  //   ]
  // }


  // {
  //   label: 'Scarecrows on Parade',
  //   id:"lesson9-unit2",
  //   items: [
  //     { label: 'Introduction', command: () => this.levelService.getLesson("lesson9-unit2","introduction2"), id: "introduction2", pid: "lesson9-unit2"},
  //     { label: 'Story Time: The Scarecrows on Parade!', command: () => this.levelService.getLesson("lesson9-unit2","storytime2"), id: "storytime2", pid: "lesson9-unit2"},
  //       { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson9-unit2","clix"), id: "clix", pid: "lesson9-unit2"},
  //       { label: 'Think and Write', command: () => this.levelService.getLesson("lesson9-unit2","thinkandwrite"), id: "thinkandwrite", pid: "lesson9-unit2"},
  //           { label: 'Word Help', command: () => this.levelService.getLesson("lesson9-unit2","wordhelp"), id: "wordhelp", pid: "lesson9-unit2"}
  //   ]
  // },
  // {
  //   label: 'Tara Finds her Stars',
  //   id: "lesson8-unit2",
  //   items: [
  //     { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson8-unit2", "review"), id: "review", pid: "lesson8-unit2" },
  //     { label: 'Introduction', command: () => this.levelService.getLesson("lesson8-unit2", "introduction"), id: "introduction", pid: "lesson8-unit2" },
  //     { label: 'Story Time: Tara Finds Her Stars', command: () => this.levelService.getLesson("lesson8-unit2", "storytime"), id: "storytime", pid: "lesson8-unit2" },
  //     { label: 'Let\'s Talk', command: () => this.levelService.getLesson("lesson8-unit2", "letstalk"), id: "letstalk", pid: "lesson8-unit2" },
  //     { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson8-unit2", "clixtime"), id: "clixtime", pid: "lesson8-unit2" },
  //     { label: 'Word Help', command: () => this.levelService.getLesson("lesson8-unit2", "wordhelp"), id: "wordhelp", pid: "lesson8-unit2" }
  //   ]
  // },
  // {
  //   label: 'The Red Rain Coat',
  //   id: "unit2-1lesson4",
  //   items: [
  //     { label: 'Introduction', command: () => this.levelService.getLesson("unit2-1lesson4", "introduction2"), id: "introduction2", pid: "unit2-1lesson4" },
  //     { label: 'Story Time:The Red Rain Coat', command: () => this.levelService.getLesson("unit2-1lesson4", "storytime2"), id: "storytime2", pid: "unit2-1lesson4" },
  //     { label: 'Lets Talk', command: () => this.levelService.getLesson("unit2-1lesson4", "letstalk2"), id: "letstalk2", pid: "unit2-1lesson4" },
  //     { label: 'Think and Write', command: () => this.levelService.getLesson("unit2-1lesson4", "thinkandwrite"), id: "thinkandwrite", pid: "unit2-1lesson4" },
  //     { label: 'Word Help', command: () => this.levelService.getLesson("unit2-1lesson4", "wordhelp"), id: "wordhelp", pid: "unit2-1lesson4" }
  //   ]
  // }
