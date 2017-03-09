import {
  Component, Input, OnInit,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { Observable } from 'rxjs';

@Component(
  {
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  }
)
export class OnPushComponent implements OnInit {

  @Input()
  profile: any;


  @Input()
  items: Observable<number>;

  counter: number = 0;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {

    this.items.subscribe(
      () => {
        this.counter++;
        if (this.counter % 20 === 0) {
          this._changeDetectorRef.markForCheck();
        }
      },
      null,
      () => {
        console.log('finish')
      }
    )
  }

}
