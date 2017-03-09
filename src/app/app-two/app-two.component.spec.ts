import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTwoComponent } from './app-two.component';

describe('AppTwoComponent', () => {
  let component: AppTwoComponent;
  let fixture: ComponentFixture<AppTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
