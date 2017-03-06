import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { Route } from '@angular/router';


export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
