import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ConnectService } from './connect.service';


@NgModule(
  {
    declarations: [
      AppComponent,
      SwitcherComponent,
      DefaultComponent,
      OnPushComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [ConnectService],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
