import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {URL} from '../config';
console.log(URL)
@Injectable()
export class UserListService {

  constructor(private _http: Http, @Inject(URL) private _url: any) {
  }

  public getUsers(): Observable<any> {
    return this._http.get(`${this._url}/courses/groups/api/participants?key=1bjzk9e`)
      .map((res: Response) => res.json())
      .catch((err: Error) => Observable.of([]))
  }

}
