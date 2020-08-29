import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {DataService} from './data.service';

describe('DataService', () => {
  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    // dataService = TestBed.inject(DataService);
  });

  it('should return the list of homes', () => {
    // spy on and mock httpClient
    httpClient = TestBed.inject(HttpClient);
    const homesMock = [
      {title: 'home 1', image: 'assets/listing.jpg', location: 'new york'},
      {title: 'home 2', image: 'assets/listing.jpg', location: 'san jose'},
      {title: 'home 3', image: 'assets/listing.jpg', location: 'san francisco'}
    ];

    spyOn(httpClient, 'get').and.returnValue(of(homesMock));
    // use our service to get homes.
    dataService = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getHomes$().subscribe(spy);
    // verify that the service returned mocked data.
    expect(spy).toHaveBeenCalledWith(homesMock);
    // verify that the service called the proper HTTP endpoint.
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
