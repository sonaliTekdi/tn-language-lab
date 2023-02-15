import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelSidemenuComponent } from './level-sidemenu/level-sidemenu.component';
import { LevelViewpartComponent } from './level-viewpart/level-viewpart.component';



@NgModule({
  declarations: [
    LevelSidemenuComponent,
    LevelViewpartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LevelModule { }
