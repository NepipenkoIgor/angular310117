import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routes } from './routes';
import { UsersComponent } from './users/users.component'

import { UsersResolverService } from './users-resolver.service';
import { UserComponent } from './users/user/user.component'
import { GuardService } from './guard.service';

import InfoModule from './info/info.module'

@NgModule(
  {
    declarations: [
      AppComponent,
      HomeComponent,
      UsersComponent,
      UserComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot(routes),
      InfoModule
    ],
    providers: [UsersResolverService, GuardService],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
