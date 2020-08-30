import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dataService: DataService,
              private dialogRef: MatDialogRef<BookComponent>,
              private snackBar: MatSnackBar,
             ) {}

  checkIn = '';
  checkOut = '';
  duration = 3;

  calculateTotal(checkIn, checkOut): number {
    // find the difference between the dates which will give the number of
    // nights

    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');
    const nights = checkOutDate.diff(checkInDate, 'days');
    // multiple number of nights by the price.
    return nights * this.data.home.price;

  }
  ngOnInit(): void {

  }

  book() {
      this.dataService.bookHome$().subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open('Succesfully booked', null, { duration: this.duration * 1000} );
      });

  }
}
