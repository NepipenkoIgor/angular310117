import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'input[courseLog]'
})
export class LogDirective {

  @HostListener('input', ['$event'])
  public onInput(event: KeyboardEvent) {
    console.info((event.target as HTMLInputElement).value);
  }

  @HostBinding('class.isValid')
  public isValid: boolean = true;

  public constructor() {
    setTimeout(() => {
      this.isValid = false;
    }, 7000)
  }

}
/// ( )

// [ ]
