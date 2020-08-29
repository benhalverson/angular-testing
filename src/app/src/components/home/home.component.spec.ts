
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs'
import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: DataService, useFactory: () => spyOnClass(DataService)} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of([

    {
        title: 'Home 1',
        image: 'assest/listing.jpg',
        location: 'new york'
    },
    {
        title: 'Home 2',
        image: 'assest/listing.jpg',
        location: 'san jose'
    },
    {
        title: 'Home 3',
        image: 'assest/listing.jpg',
        location: 'san francisco'
    }


    ]));
    fixture.detectChanges();
  });

  it('should show homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('new york');
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });

  xit('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('new york');
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });


});
