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
}
