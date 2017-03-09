import { Component, HostListener, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component(
  {
    selector: 'app-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.css'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(()=> SwitcherComponent),
        multi: true
      }
    ]
  }
)
export class SwitcherComponent implements ControlValueAccessor {

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this._onChangeCallback(this.checked);
    this._onTouchedCallback(this.checked);
  }


  public size: string = 'small'

  public checked: boolean;

  private _onTouchedCallback: (value: boolean) => void;
  private _onChangeCallback: (value: boolean) => void;


  constructor() { }


  public writeValue(checked: boolean): void {
    this.checked = checked;
  };

  public registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  };

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  };


}
