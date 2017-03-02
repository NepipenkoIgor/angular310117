import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersResolverService implements Resolve<User> {

  constructor(
    private _http: Http
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this._http.get('http://learn.javascript.ru/courses/groups/api/participants?key=1bjzk9e')
      .map(
        res => res.json()
          .map((user: User, i: number) => Object.assign(user, { id: i }))
      )
  }


}
