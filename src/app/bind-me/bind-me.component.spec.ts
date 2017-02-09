/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindMeComponent } from './bind-me.component';

describe('BindMeComponent', () => {
  let component: BindMeComponent;
  let fixture: ComponentFixture<BindMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
