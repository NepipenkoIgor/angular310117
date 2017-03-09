import { Component, OnInit , NgZone, ChangeDetectorRef} from '@angular/core';

import { ConnectService } from '../connect.service'

@Component(
  {
    selector: 'app-app-two',
    templateUrl: './app-two.component.html',
    styleUrls: ['./app-two.component.css']
  }
)
export class AppTwoComponent implements OnInit {

  public value: string | boolean;

  constructor(
    private _connectService: ConnectService,
    private _zone: NgZone,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this._connectService.getStreamValue()
      .subscribe(
        (value: string | boolean) => {
          console.log('app two', value)
          //this._zone.run(()=>this.value = value);
          this.value = value
          this._changeDetectorRef.markForCheck()
        }
      )
  }

}
