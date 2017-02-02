import {
  Component, ViewChild, ElementRef, AfterViewInit,
  ViewContainerRef, ComponentFactoryResolver, ComponentFactory
} from '@angular/core';

import {ChildComponent} from './child/child.component'


interface Type<T> extends Function {
  new (...args: any[]): T;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public title: string = 'app works!';
  public profile: {name: string, surname: string, age: number}

  public text: string = 'Hi Angular you are cool';
  public color: string = 'red'
  public inputValue: string = 'red'
  public count: number = 0;

  // @ViewChild('field', {read:ElementRef})
  // public conteiner:ElementRef;

  @ViewChild('conteiner', {read: ViewContainerRef})
  public conteiner: ViewContainerRef;

  public constructor(private _componentResolver: ComponentFactoryResolver) {
    setTimeout(() => {
      this.profile = {
        name: 'Igor',
        surname: 'Nepipenko',
        age: 30
      }
    }, 3003)

  }

  public getVal(num: number): number {
    return 30 + num;

  }

  public ngAfterViewInit() {
    setTimeout(() => {
      const component = this._createComponent(ChildComponent)
      this.conteiner.createComponent(component)
      setTimeout(() => {
        this.conteiner.clear();
      },20000)
    }, 3000)
    //console.log(this.conteiner.nativeElement);
  }

  public logValue(value: string): void {
    // console.info(value)
    console.info(this.inputValue)
  }


  private _createComponent<T>(component: Type<T>): ComponentFactory<T> {
    return this._componentResolver.resolveComponentFactory(component)
  }


}
