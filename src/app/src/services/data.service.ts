import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
//TODO get data from real service
  getHomes$() {
    return of([]);
  }
}
