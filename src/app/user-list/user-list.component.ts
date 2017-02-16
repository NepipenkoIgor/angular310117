import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import {UserListService} from './user-list.service'

@Component({
  selector: 'course-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  public set searchTerm(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.search = searchTerm;
    console.log(this.search)
  };

  public search: string = '';

  public users$: Observable<any>;

  public constructor(private _userListService: UserListService) {

  }

  ngOnInit() {
    this.users$ = this._userListService.getUsers();
  }

}
