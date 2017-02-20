import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  public name: FormControl = new FormControl('Ig', [Validators.required, Validators.minLength(4)]);


  // public formArrayModel = new FormGroup({
  //   emails: new FormArray([new FormControl('')])
  // })
  // public formModel: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   ssn: new FormControl('')
  // });

  // public formModel: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   ssn: new FormControl(''),
  //   passwordGroup: new FormGroup({
  //     password: new FormControl(''),
  //     pconfirm: new FormControl(''),
  //   })
  // });

  public formModel: FormGroup;

  public constructor(private _fb: FormBuilder) {

    this.formModel = this._fb.group({
      username: ['', this.nameValidator],
      ssn: ['', [Validators.required, this.ssnValidator]],
      passwordGroup: this._fb.group({
        password: [''],
        pconfirm: [''],
      }, {
        asyncValidator: this.asyncEqualValidator
      })
    });

  }

  //
  //
  public submit(value: any): void {
    console.log(value)
  }


  public ssnValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true}
  }


  public nameValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^[a-zA-Z]*$/);
    return valid ? null : {nospecial: true}
  }

  public asyncEqualValidator({value}:FormGroup): Observable<{[key: string]: boolean}> {
    const [first, ...rest] = Object.keys(value || {});
    const valid = first&&first.length>5 && rest.every(v => value[v] === value[first]);
    return Observable.of(valid ? null : {equal: true}).delay(5000)
  }

  // public addEmail():void{
  //   (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''))
  // }
}
