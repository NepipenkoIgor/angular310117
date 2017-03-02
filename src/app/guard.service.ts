import { Injectable } from '@angular/core';

import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'



@Injectable()
export class GuardService implements CanActivate{

  constructor() { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean{
    return window.confirm('Go to user list ?????')
  };


}
