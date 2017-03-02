import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component(
  {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  }
)
export class UserComponent implements OnInit {

  public id: number;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (params: { id: number }) => {
        this.id = params.id;
      }
    )
    this._activatedRoute.queryParams.subscribe(
      (queryParams: { [key: string]: string }) => {
        console.log(queryParams)
      }
    )
  }

}
