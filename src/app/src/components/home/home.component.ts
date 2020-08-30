import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {DialogService} from '../../services/dialog.service';
import {BookComponent} from '../book/book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homes$;
  constructor(
      private readonly dataService: DataService,
      private readonly dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog(home): void {
    this.dialogService.open(BookComponent, {width: '500px', data: {home}});
  }
}
