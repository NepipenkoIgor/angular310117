import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTwoComponent } from './app-two.component'
import { ConnectService } from '../connect.service';
@NgModule(
  {
    imports: [
      BrowserModule,
    ],
    declarations: [
      AppTwoComponent
    ],
    providers: [ConnectService],
    bootstrap: [AppTwoComponent]
  }
)
export class AppTwoModule {
}
