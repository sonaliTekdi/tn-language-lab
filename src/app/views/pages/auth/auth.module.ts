import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonService } from 'src/app/core/services/common.service';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    SelectButtonModule
  ],
  providers: [
    CommonService,
  ]

})
export class AuthModule { }
