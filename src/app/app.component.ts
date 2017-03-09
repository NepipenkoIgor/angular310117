import { Component } from '@angular/core';

import  { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';

import { ConnectService } from './connect.service'

class Profile {
  public constructor(
    public firstName: string,
    public lastName: string,
  ) {

  }

  public lastChanged() {
    return new Date();
  }
}


@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  }
)
export class AppComponent {

  public profile1: Profile;
  public profile2: Profile;

  public checkBox: FormControl = new FormControl(false)


  public items: Observable<number> = Observable.timer(100, 100)
    .take(101)

  constructor(
    private _connectService: ConnectService
  ) {
    this.checkBox.valueChanges.subscribe(
      (checked: boolean) => {
        this._connectService.setStreamValue = checked;
      }
    )

    this.profile1 = new Profile('Igor', 'Nepipenko');
    this.profile2 = new Profile('Vlad', 'Zotke');
    //
    // setTimeout(
    //   () => {
    //     console.info('change')
    //     //this.profile2.firstName = 'Vova'
    //     this.profile2 = new Profile('Vova', 'Loban');
    //   }, 7000
    // )

  }


}
