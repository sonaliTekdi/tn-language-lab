import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any[];
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor() { }

  ngOnInit(): void {
    this.Items = [
        {
            label: 'Eng Level 1 Unit 1',
            items: [
                {
                    label: 'Unit 1',
                    items: [
                        {
                            label: 'Lesson Name', 
                            items: [
                                {
                                    label: 'Whats going on?',
                                    items: [
                                        { label: 'Introduction' },
                                        { label: 'Warm Up' },
                                        { label: 'Picture Play' },
                                        { label: 'Open Story' },
                                        { label: 'Think and write' },
                                        { label: 'Word Help' }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            label: 'Eng Level 1 Unit 2',
            items: [
                {
                    label: 'Unit 1',
                    items: [
                        {
                            label: 'Lesson Name', 
                            items: [
                                {
                                    label: 'Whats going on?',
                                    items: [
                                        { label: 'Introduction' },
                                        { label: 'Warm Up' },
                                        { label: 'Picture Play' },
                                        { label: 'Open Story' },
                                        { label: 'Think and write' },
                                        { label: 'Word Help' }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
    ];
  }
 

}
