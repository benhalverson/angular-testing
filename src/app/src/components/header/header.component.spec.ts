import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [HeaderComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]'))
        .toBeTruthy();
  });

  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="search"]'))
        .toBeTruthy();
  });

  it('should search bar', () => {
    expect(fixture.nativeElement.querySelector('[data-test="menu"]'))
        .toBeTruthy();
  });

  it('should show filters', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home-type"]'))
        .toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="dates"]'))
        .toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="guests"]'))
        .toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="price"]'))
        .toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="rooms"]'))
        .toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="amenities"]'))
        .toBeTruthy();
  });
});
