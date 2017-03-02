import {Component, Directive, OnInit} from '@angular/core';
import {FormControl, NG_VALIDATORS, NG_ASYNC_VALIDATORS, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Directive({
  selector: '[ssn][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}
  ]
})
export class SsnValidator{}

@Directive({
  selector: '[namevalidator][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: nameValidator, multi: true}
  ]
})
export class NameValidator{}

@Directive({
  selector: '[asyncequal][ngModelGroup]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useValue: asyncEqualValidator, multi: true}
  ]
})
export class AsyncEqualValidator{}


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public submit(value: any): void {
    console.log(value)
  }

}


function ssnValidator(control: FormControl): {[key: string]: boolean} {
  const value = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true}
}


function nameValidator(control: FormControl): {[key: string]: boolean} {
  const value = control.value || '';
  const valid = value.match(/^[a-zA-Z]*$/);
  return valid ? null : {nospecial: true}
}

function asyncEqualValidator({value}:FormGroup): Observable<{[key: string]: boolean}> {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return Observable.of(valid ? null : {equal: true}).delay(5000)
}
