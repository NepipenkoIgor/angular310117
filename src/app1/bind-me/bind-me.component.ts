import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'course-bind-me',
  templateUrl: './bind-me.component.html',
  styleUrls: ['./bind-me.component.css']
})
export class BindMeComponent implements OnInit {

  @Input()
  public prop: string;

  public classExp = {'first': true, 'second': false};
  public myStyles = {'color': 'red', 'font-size': '20px'};

  constructor() {
    console.log(1, this.prop)
  }

  ngOnInit() {
    console.log(2, this.prop)
  }

}
