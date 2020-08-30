import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private readonly httpClient: HttpClient) {}
  // TODO get data from real service
  getHomes$() {
    return this.httpClient.get<any>('assets/homes.json');
  }

  bookHome$() {
    return this.httpClient.post('https://run.mocky.io/v3/25a9e978-f688-4988-a8c8-efdd48195dc8', {});
  }
}
