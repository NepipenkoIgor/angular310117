/* tslint:disable:no-unused-variable */

import { TestBed, fakeAsync,inject,tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {routes} from './config'
describe('AppComponent: testing component links', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });
  });

  it('should have router links', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('.home').textContent).toBe('Home');
    expect(fixture.nativeElement.querySelector('.profile').textContent).toBe('Profile');
  });

});


describe('AppComponent: testing routing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });
  });

  it('should have router links', fakeAsync(inject([Router,Location],(router,location) => {
    TestBed.createComponent(AppComponent);
    router.navigate(['/'])
    tick()
    expect(location.path()).toBe('/home')
    router.navigateByUrl('/')
    tick()
    expect(location.path()).toBe('/home')
  })));


  it('should be able navigate by link', fakeAsync(inject([Router,Location],(router,location) => {
    let fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    fixture.nativeElement.querySelector('.home').click();
    tick()
    expect(location.path()).toBe('/home')

    fixture.nativeElement.querySelector('.profile').click();
    tick()
    expect(location.path()).toBe('/profile')
  })));

});

