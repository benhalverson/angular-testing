import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homes$;
  constructor(private readonly dataService: DataService,) { }

  ngOnInit(): void {
      this.homes$ = this.dataService.getHomes$();
   /*this.homes$ = of([
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
   ])*/
    }

}
