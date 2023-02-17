import { NgModule } from '@angular/core';
import { BaseComponent } from './views/layout/base/base.component';
// import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NoAccessComponent } from './views/pages/no-access/no-access.component';
import { HomeComponent } from './views/pages/home/home.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'level',
        loadChildren: () => import('./views/pages/level/level.module').then(m => m.LevelModule)
      },

      // {
      //   path: 'competition',
      //   loadChildren: () => import('./views/pages/competition/competition.module').then(m => m.CompetitionModule)
      // },
      {
        path: 'no-access',
        loadChildren: () => import('./views/pages/no-access/no-access.module').then(m => m.NoAccessModule),
        data: {
          breadcrumb: 'No Access'
        }
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },


  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
