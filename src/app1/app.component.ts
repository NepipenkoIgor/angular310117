import {
  Component, ViewChild, ElementRef, AfterViewInit, ComponentRef,
  ViewContainerRef, ComponentFactoryResolver, ComponentFactory,
  DoCheck, Inject
} from '@angular/core';

import {ChildComponent} from './child/child.component'
import {Observable} from "rxjs/Observable";


interface Type<T> extends Function {
  new (...args: any[]): T;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, DoCheck {
  public title: string = 'app works!';
  public profile: {name: string, surname: string, age: number}

  public text: string = 'Hi Angular you are cool';
  public color: string = 'red'
  public inputValue: string = '';
  public count: number = 0;
  public myDate = Date.now();
  public cost = 10.23456;
  public prop = 'myProp';

  public asyncTime = Observable.create(observer => {
    setInterval(() => observer.next(Date.now()), 1000)
  })

  private _comp: ComponentRef<ChildComponent>

  // @ViewChild('field', {read:ElementRef})
  // public conteiner:ElementRef;

  @ViewChild('container', {read: ViewContainerRef})
  public container: ViewContainerRef;

  public constructor(
    private _componentResolver: ComponentFactoryResolver,
                     @Inject('SizeService') private _sizeService: any
  ) {
    this.profile = {
      name: 'Igor',
      surname: 'Nepipenko',
      age: 30
    }

    this._sizeService.run();

  }

  public getVal(num: number): number {
    return 30 + num;

  }

  public ngAfterViewInit() {
    setTimeout(() => {
      const component = this._createComponent(ChildComponent)
      this._comp = this.container.createComponent(component)
      this._comp.instance.clickOnName.subscribe(event => {
        this.count = this.count + event.count
      });
      // setTimeout(() => {
      //   this.conteiner.clear();
      // }, 20000)
    }, 3000)
    //console.log(this.conteiner.nativeElement);
  }

  public ngDoCheck() {
    this._comp && (this._comp.instance.myName = this.inputValue)
  }

  public logValue(value: string): void {
    // console.info(value)
    console.info(this.inputValue)
  }


  private _createComponent<T>(component: Type<T>): ComponentFactory<T> {
    return this._componentResolver.resolveComponentFactory(component)

  }
}
