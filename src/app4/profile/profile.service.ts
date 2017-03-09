import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {

  constructor(
    private _http:Http
  ) { }


  public getUsers():Observable<User[]>{
    return this._http.get('http://learn.javascript.ru/courses/groups/api/participants?key=1bjzk9e')
      .map(res=>res.json())
  }
}
