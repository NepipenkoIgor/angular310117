import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ConnectService {

  private static _subject: Subject<string | boolean > = new Subject();

  constructor() { }

  public set setStreamValue(v: string | boolean) {
    ConnectService._subject.next(v)
  }

  public getStreamValue(): Observable<string | boolean> {
    return ConnectService._subject;
  }

}
