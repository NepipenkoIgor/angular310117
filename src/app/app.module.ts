import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OpaqueToken} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {BindMeComponent} from './bind-me/bind-me.component';
import {LogDirective} from './log.directive';
import {UserListComponent} from './user-list/user-list.component';
import {FilterPipe} from './filter.pipe';

import {UserListService} from './user-list/user-list.service'

import {ViewportService} from './viewport.service'

import {URL} from './config';
console.log(URL)

// string
// type
// token

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BindMeComponent,
    LogDirective,
    UserListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [ChildComponent],
  providers: [
    {provide: UserListService, useClass: UserListService},
    {provide: URL, useValue: 'http://learn.javascript.ru'},
    ViewportService,
    {
      provide: 'SizeService', useFactory: (viewport: any) => {
      return viewport.determineService()
    }, deps: [ViewportService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
