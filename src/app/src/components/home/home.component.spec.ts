import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('new york');
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('new york');
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });


});
