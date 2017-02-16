import {Injectable} from '@angular/core';
import {SmallService} from './small.service'
import {LargeService} from './large.service'
@Injectable()
export class ViewportService {

  public determineService(): SmallService | LargeService {
    let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (w < 800) {
      return new SmallService()
    }
    return new LargeService()
  }

}
