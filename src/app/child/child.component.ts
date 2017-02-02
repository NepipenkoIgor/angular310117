import { Component, OnInit,
  Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'course-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  @Input('name')
  public myName:string

  @Output()
  public clickOnName:EventEmitter<{count:number,tag:string}> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public clickOnPTag(){
    this.clickOnName.next({count:1,tag:'p'})
  }

}
