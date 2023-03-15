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
        lid: "speakWithMe",
        id: "speakWithMe_unit",
        expanded: true,
        items: [
          { label: 'Explore & Learn', command: () => this.levelService.getLesson("speakWithMe", "lesson1"), lid: "lesson1", pid: "speakWithMe", id: "speakWithMe_lesson1"},
          { label: 'Play & Learn', command: () => this.levelService.getLesson("speakWithMe", "lesson2"), lid: "lesson2", pid: "speakWithMe", id: "speakWithMe_lesson2" },
          { label: 'Learn with a Friend', command: () => this.levelService.getLesson("speakWithMe", "lesson3"), lid: "lesson3", pid: "speakWithMe", id: "speakWithMe_lesson3"}
        ]
      },
      {
        label: 'Level 1',
        lid: 'unit1',
        id: "level2_unit",
        items: [
          {
            label: 'Whats going on?',
            lid: 'lesson1',
            id: 'lesson1_unit',
            items: [
              { label: 'Describing Actions: What\'s in store today?', command: () => this.levelService.getLesson("lesson1", "introduction"), lid: "introduction", pid: "lesson1", id: "lesson1_introduction" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson1", "warmup"), lid: "warmup", pid: "lesson1", id: "lesson1_warmup" },
              // { label: 'Picture Play', command: () => this.levelService.getLesson("lesson1", "pictureplay"), lid: "pictureplay", pid: "lesson1", id: "lesson1_pictureplay"},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson1", "openstory"), lid: "openstory", pid: "lesson1", id: "lesson1_openstory"},
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson1", id: "lesson1_thinkandwrite" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson1", "wordhelp"), lid: "wordhelp", pid: "lesson1", id: "lesson1_wordhelp" }
            ]
          },
          {
            label: 'Seasons and Weather',
            lid: 'lesson5',
            id: 'lesson5_unit',
            items: [
              { label: 'Weather: What\'s in store today?', command: () => this.levelService.getLesson("lesson5", "introduction"), lid: "introduction", pid: "lesson5", id: "lesson5_t1"},
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson5", "warmUp"), lid: "warmUp", pid: "lesson5", id: "lesson5_t2" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson5", "wordplay"), lid: "wordplay", pid: "lesson5", id: "lesson5_t3" },
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson5", "pictureplay"), lid: "pictureplay", pid: "lesson5", id: "lesson5_t4" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5", "letstalk"), lid: "letstalk", pid: "lesson5", id: "lesson5_t5" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson5", id: "lesson5_t6" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5", "wordhelp"), lid: "wordhelp", pid: "lesson5", id: "lesson5_t7" }
            ]
          },
          {
            label: 'Find the Things',
            lid: "lesson6",
            id: 'lesson6_unit',
            items: [
              { label: 'Location: What\'s in store today?', command: () => this.levelService.getLesson("lesson6", "introduction"), lid: "introduction", pid: "lesson6", id: "lesson6_t1" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson6", "warmup"), lid: "warmup", pid: "lesson6", id: "lesson6_t2" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson6", "wordplay"), lid: "wordplay", pid: "lesson6", id: "lesson6_t3" },
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson6", "pictureplay"), lid: "pictureplay", pid: "lesson6", id: "lesson6_t4" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6", "letstalk"), lid: "letstalk", pid: "lesson6", id: "lesson6_t5" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson6", id: "lesson6_t6" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6", "wordhelp"), lid: "wordhelp", pid: "lesson6", id: "lesson6_t7" }
            ]
          },
          {
            label: 'How do you feel today?',
            lid: "lesson8",
            id: 'lesson8_unit',
            items: [
              { label: 'Feelings: What\'s in store today?', command: () => this.levelService.getLesson("lesson8", "introduction"), lid: "introduction", pid: "lesson8", id: "lesson8_t1"},
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson8", "warmUp"), lid: "warmUp", pid: "lesson8", id: "lesson8_t2" },
              // { label: 'Picture Play', command: () => this.levelService.getLesson("lesson8", "pictureplay"), lid: "pictureplay", pid: "lesson8", id: "lesson8_t3" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson8", "letstalk"), lid: "letstalk", pid: "lesson8", id: "lesson8_t4" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson8", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson8", id: "lesson8_t5" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson8", "wordhelp"), lid: "wordhelp", pid: "lesson8", id: "lesson8_t6" }
            ]
          },
          {
            label: 'Free Time Activities',
            lid: "lesson9",
            id: 'lesson9_unit',
            items: [
              { label: 'Leisure: What\'s in store today?', command: () => this.levelService.getLesson("lesson9", "introduction"), lid: "introduction", pid: "lesson9", id: "lesson9_t1" },
              { label: 'Warm Up', command: () => this.levelService.getLesson("lesson9", "warmUp"), lid: "warmUp", pid: "lesson9", id: "lesson9_t2" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson9", "pictureplay"), lid: "pictureplay", pid: "lesson9", id: "lesson9_t3" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson9", "openstory"), lid: "openstory", pid: "lesson9", id: "lesson9_t4" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson9", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson9", id: "lesson9_t5" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson9", "wordhelp"), lid: "wordhelp", pid: "lesson9", id: "lesson9_t6" }
            ]
          }
        ]
      },
      {
        label: "Level 2",
        lid: 'unit2',
        id: 'level2_unit',
        items: [
          {
            label: 'Under My Bed',
            lid: "lesson1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson1-unit2", "review"), lid: "review", pid: "lesson1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson1-unit2", "introduction"), lid: "introduction", pid: "lesson1-unit2" },
              { label: 'Story Time: Under my Bed', command: () => this.levelService.getLesson("lesson1-unit2", "storytime"), lid: "storytime", pid: "lesson1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson1-unit2", "letstalk"), lid: "letstalk", pid: "lesson1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson1-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson1-unit2" }
            ]
          },
          {
            label: 'Ramya\'s Stars',
            lid: "lesson2-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson2-unit2", "review"), id: "review", pid: "lesson2-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson2-unit2", "introduction"), lid: "introduction", pid: "lesson2-unit2" },
              { label: 'Story Time: Ramya\'s Stars', command: () => this.levelService.getLesson("lesson2-unit2", "storytime"), lid: "storytime", pid: "lesson2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson2-unit2", "letstalk"), lid: "letstalk", pid: "lesson2-unit2" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson2-unit2", "openstory"), lid: "openstory", pid: "lesson2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson2-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson2-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson2-unit2" }
            ]
          },
          {
            label: 'When Amma Went to School',
            lid: "lesson3-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson3-unit2", "introduction"), lid: "introduction", pid: "lesson3-unit2" },
              { label: 'Story Time: When Amma Went to School', command: () => this.levelService.getLesson("lesson3-unit2", "storytime"), lid: "storytime", pid: "lesson3-unit2" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-unit2", "openstory"), lid: "openstory", pid: "lesson3-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson3-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson3-unit2" }
            ]
          },
          {
            label: 'Brushing is No Fun!',
            lid: "lesson3-1-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson3-1-unit2", "introduction2"), lid: "introduction2", pid: "lesson3-1-unit2" },
              { label: 'Story Time: Brushing is No Fun!', command: () => this.levelService.getLesson("lesson3-1-unit2", "storytime2"), lid: "storytime2", pid: "lesson3-1-unit2" },
              { label: 'Word Play', command: () => this.levelService.getLesson("lesson3-1-unit2", "wordplay"), lid: "wordplay", pid: "lesson3-1-unit2" },
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson3-1-unit2", "openstory2"), lid: "openstory2", pid: "lesson3-1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson3-1-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson3-1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson3-1-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson3-1-unit2" }
            ]
          },
          {
            label: 'Little Painters',
            lid: "lesson5_1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson5_1-unit2", "review"), lid: "review", pid: "lesson5_1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson5_1-unit2", "introduction"), lid: "introduction", pid: "lesson5_1-unit2" },
              { label: 'Story Time: Little Painters!', command: () => this.levelService.getLesson("lesson5_1-unit2", "storytime"), lid: "storytime", pid: "lesson5_1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5_1-unit2", "letstalk"), lid: "letstalk", pid: "lesson5_1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5_1-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson5_1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5_1-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson5_1-unit2" }
            ]
          },
          {
            label: 'Bluie\'s World',
            lid: "lesson5_2-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson5_2-unit2", "introduction"), lid: "introduction", pid: "lesson5_2-unit2" },
              { label: 'Story Time: Bluie\'s World!', command: () => this.levelService.getLesson("lesson5_2-unit2", "storytime"), lid: "storytime", pid: "lesson5_2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5_2-unit2", "letstalk"), lid: "letstalk", pid: "lesson5_2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5_2-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson5_2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson5_2-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson5_2-unit2" }
            ]
          },
          {
            label: 'Samira\'s Awful Lunch',
            lid: "lesson7-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson7-unit2", "introduction2"), lid: "introduction2", pid: "lesson7-unit2" },
              { label: 'Story Time: Samira\'s Awful Lunch', command: () => this.levelService.getLesson("lesson7-unit2", "storytime2"), lid: "storytime2", pid: "lesson7-unit2" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson7-unit2", "wordplay"), lid: "wordplay", pid: "lesson7-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson7-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson7-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson7-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson7-unit2" }
            ]
          },
          {
            label: 'Goodnight Tinku!',
            lid: "lesson6_1-unit2",
            items: [
              // { label: 'What\'s in store today?', command: () => this.levelService.getLesson("lesson6_1-unit2", "review"), lid: "review", pid: "lesson6_1-unit2" },
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson6_1-unit2", "introduction"), lid: "introduction", pid: "lesson6_1-unit2" },
              { label: 'Story Time: Goodnight Tinku!', command: () => this.levelService.getLesson("lesson6_1-unit2", "storytime"), lid: "storytime", pid: "lesson6_1-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6_1-unit2", "letstalk"), lid: "letstalk", pid: "lesson6_1-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6_1-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson6_1-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6_1-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson6_1-unit2" }
            ]
          },
          {
            label: 'The Boy and the Drum',
            lid: "lesson6_2-unit2",
            items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson6_2-unit2", "introduction"), lid: "introduction", pid: "lesson6_2-unit2" },
              { label: 'Story Time: The Boy and the Drum', command: () => this.levelService.getLesson("lesson6_2-unit2", "storytime"), lid: "storytime", pid: "lesson6_2-unit2" },
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6_2-unit2", "letstalk"), lid: "letstalk", pid: "lesson6_2-unit2" },
              { label: 'Quiz Time', command: () => this.levelService.getLesson("lesson6_2-unit2", "clixtime"), lid: "clixtime", pid: "lesson6_2-unit2" },
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6_2-unit2", "thinkandwrite"), lid: "thinkandwrite", pid: "lesson6_2-unit2" },
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson6_2-unit2", "wordhelp"), lid: "wordhelp", pid: "lesson6_2-unit2" }
            ]
          }
        ]
      }
    ]

    this.levelService.nextLessonData = [];
    this.Items.forEach(lesson => {
      lesson.items.forEach(topic => {
        if (!topic.items){
          this.levelService.nextLessonData.push({ lid: topic.lid, pid: topic.pid })
        }else{
          topic.items.forEach(chapter => {
            this.levelService.nextLessonData.push({ lid: chapter.lid, pid: chapter.pid })
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
