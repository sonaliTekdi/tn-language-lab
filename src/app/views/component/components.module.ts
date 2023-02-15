import { NgModule } from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';
import { SpinnerComponent } from './spinnercomponent/spinner.component';

export const components = [
  SpinnerComponent
];

@NgModule({
  declarations: [components],
  imports: [
    ProgressBarModule
  ],
  exports: [components],

})
export class ComponentsModule { }
