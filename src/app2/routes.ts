import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

import { Route } from '@angular/router';

import { UsersResolverService } from './users-resolver.service'
import { GuardService } from './guard.service'

export const routes: Route [] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: UsersComponent,
        data: { title: 'User list' },
        resolve: {
          users: UsersResolverService
        },
        canActivate: [GuardService]
      },
      {
        path: 'user/:id',
        component: UserComponent
      }
    ]

  },
  {
    path: ':chat',
    outlet: 'mymodal',
    component: ChatComponent,
  },
  // {
  //   path: 'info',
  //   loadChildren: 'app/info/info.module#InfoModule'
  // },
  {
    path: '**',
    redirectTo: ''
  }
]
