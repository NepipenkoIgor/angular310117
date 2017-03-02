import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'

@Component(
  {
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  }
)
export class UsersComponent implements OnInit {


  public title: string;
  public users: User[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {
    console.log(this._activatedRoute.snapshot.data)
    this._activatedRoute.data.subscribe(
      (data: { title: string, users: User[] }) => {
        console.log(data)
        this.title = data.title;
        this.users = data.users;
      }
    )
  }

}
