import { Component, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LevelService } from '../level.service';
import * as collection from '../../../../../assets/jsons/level-sidemenu.json'


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any[];
    collection = (collection as any);
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
    //this.Items = [collection];
    
    this.Items = [
        {
            label: 'Lesson 3: Whats going on?',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=1},
                { label: 'Warm Up', command: () => this.levelService.viewPage=2},
                { label: 'Picture Play', command: () => this.levelService.viewPage=3},
                { label: 'Open Story', command: () => this.levelService.viewPage=4},
                { label: 'Think and Write', command: () => this.levelService.viewPage=5},
                { label: 'word Help', command: () => this.levelService.viewPage=6}
            ]
        },
        {
            label: 'Lesson 5: Seasons and Weather',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=7},
                { label: 'Warm Up', command: () => this.levelService.viewPage=8},
                { label: 'Word Play', command: () => this.levelService.viewPage=9},
                { label: 'Picture Play', command: () => this.levelService.viewPage=10},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=11},
                { label: 'Think and Write', command: () => this.levelService.viewPage=12},
                { label: 'word Help', command: () => this.levelService.viewPage=13}
            ]
        },
        {
            label: 'Lesson 6: Find the Things',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=14},
                { label: 'Warm Up', command: () => this.levelService.viewPage=15},
                { label: 'Word Play', command: () => this.levelService.viewPage=16},
                { label: 'Picture Play', command: () => this.levelService.viewPage=17},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=18},
                { label: 'Think and Write', command: () => this.levelService.viewPage=19},
                { label: 'word Help', command: () => this.levelService.viewPage=20}
            ]
        },
        {
            label: 'Lesson 8: How do you feel today?',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=21},
                { label: 'Warm Up', command: () => this.levelService.viewPage=22},
                { label: 'Picture Play', command: () => this.levelService.viewPage=23},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=24},
                { label: 'Think and Write', command: () => this.levelService.viewPage=25},
                { label: 'word Help', command: () => this.levelService.viewPage=26}
            ]
        },
        // {
        //     label: 'Eng Level 1',
        //     expanded: true,
        //     items: [
        //         {
        //             label: 'Unit 1',
        //             expanded: true,
        //             items: [
        //                 {
        //                     label: 'Lesson 3', 
        //                     expanded: true,
        //                     items: [
        //                         {
        //                             label: 'Whats going on?',
        //                             expanded: true,
        //                             items: [
        //                                 { label: 'Introduction', command: () => this.levelService.viewPage=1},
        //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=2},
        //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=3},
        //                                 { label: 'Open Story', command: () => this.levelService.viewPage=4},
        //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=5},
        //                                 { label: 'word Help', command: () => this.levelService.viewPage=6}
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     label: 'Lesson 5', 
        //                     items: [
        //                         {
        //                             label: 'Seasons and Weather',
        //                             items: [
        //                                 { label: 'Introduction', command: () => this.levelService.viewPage=7},
        //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=8},
        //                                 { label: 'Word Play', command: () => this.levelService.viewPage=9},
        //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=10},
        //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=11},
        //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=12},
        //                                 { label: 'word Help', command: () => this.levelService.viewPage=13}
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     label: 'Lesson 6',
        //                     items: [
        //                         {
        //                             label: 'Find the Things',
        //                             items: [
        //                                 { label: 'Introduction', command: () => this.levelService.viewPage=14},
        //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=15},
        //                                 { label: 'Word Play', command: () => this.levelService.viewPage=16},
        //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=17},
        //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=18},
        //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=19},
        //                                 { label: 'word Help', command: () => this.levelService.viewPage=20}
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     label: 'Lesson 8',
        //                     items: [
        //                         {
        //                             label: 'How do you feel today?',
        //                             items: [
        //                                 { label: 'Introduction', command: () => this.levelService.viewPage=21},
        //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=22},
        //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=23},
        //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=24},
        //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=25},
        //                                 { label: 'word Help', command: () => this.levelService.viewPage=26}
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     label: 'Lesson 3: Whats going on?',
        //     items: [
        //         { label: 'Introduction', command: () => this.levelService.viewPage=1},
        //         { label: 'Warm Up', command: () => this.levelService.viewPage=2},
        //         { label: 'Picture Play', command: () => this.levelService.viewPage=3},
        //         { label: 'Open Story', command: () => this.levelService.viewPage=4},
        //         { label: 'Think and Write', command: () => this.levelService.viewPage=5},
        //         { label: 'word Help', command: () => this.levelService.viewPage=6}
        //     ]
        // },
    ];
  }
 

}
