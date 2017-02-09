import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BindMeComponent } from './bind-me/bind-me.component';
import { LogDirective } from './log.directive';
import { UserListComponent } from './user-list/user-list.component';
import { FilterPipe } from './filter.pipe';

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
    // HttpModule
  ],
  entryComponents:[ChildComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
