import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from './views/component/spinnercomponent/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerComponent = SpinnerComponent;
  title = 'TNEMIS';

  ngOnInit(): void {}

}
