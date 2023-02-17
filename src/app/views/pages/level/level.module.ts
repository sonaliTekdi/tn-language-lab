import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LevelSidemenuComponent } from './level-sidemenu/level-sidemenu.component';
import { LevelViewpartComponent } from './level-viewpart/level-viewpart.component';
import { LevelComponent } from './level.component';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';



const routes: Routes = [
  {
    path: '',
    component: LevelComponent
  },
  {
    path: 'level_sidemenu',
    component: LevelSidemenuComponent
  },
  {
    path: 'level_viewpart',
    component: LevelViewpartComponent
  }
]

@NgModule({
  declarations: [
    LevelComponent,
    LevelSidemenuComponent,
    LevelViewpartComponent,
  
  ],
  imports: [
    CommonModule,
    AccordionModule,
    PanelModule,
    PanelMenuModule,
    RouterModule.forChild(routes),
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LevelModule { }
