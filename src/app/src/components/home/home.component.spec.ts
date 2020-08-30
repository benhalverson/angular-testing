
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {spyOnClass} from 'jasmine-es6-spies';
import {of} from 'rxjs';

import {DataService} from '../../services/data.service';
import {DialogService} from '../../services/dialog.service';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [HomeComponent],
          providers: [
            {provide: DataService, useFactory: () => spyOnClass(DataService)},
            {
              provide: DialogService,
              useFactory: () => spyOnClass(DialogService)
            },
          ],
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);

    dataService.getHomes$.and.returnValue(of([

      {title: 'Home 1', image: 'assest/listing.jpg', location: 'new york'},
      {title: 'Home 2', image: 'assest/listing.jpg', location: 'san jose'},
      {title: 'Home 3', image: 'assest/listing.jpg', location: 'san francisco'}


    ]));
    fixture.detectChanges();
  });

  it('should show homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length)
        .toBe(3);
  });

  it('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText)
        .toEqual('Home 1');
    expect(
        fixture.nativeElement.querySelector('[data-test="location"]').innerText)
        .toEqual('new york');
    expect(fixture.nativeElement.querySelector('[data-test="image"]'))
        .toBeTruthy();
  });

  it('should show Book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-button"]')).toBeTruthy();
  });

  it('should use dialog service to open a dialog when clicking on Book button',
     () => {
       //  expect(home.querySelector('[data-test="book-button"]')).toBeTruthy();
       // grab the button to click
       const bookButton =
           fixture.nativeElement.querySelector('[data-test="home"] button');
       // click the button
       bookButton.click();
       // assert that the dialog service was used to open a dialog
       expect(dialogService.open).toHaveBeenCalled();
     });
});
