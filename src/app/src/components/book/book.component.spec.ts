import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {spyOnClass} from 'jasmine-es6-spies';
import {DataService} from '../../services/data.service';
import {DialogService} from '../../services/dialog.service';
import {BookComponent} from './book.component';
import {of} from 'rxjs';
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";



describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let notificationService: jasmine.SpyObj<MatSnackBar>;
  const el = (selector) => fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports: [FormsModule,],
          declarations: [BookComponent],
          providers: [{provide: MAT_DIALOG_DATA, useValue: {}},
            {provide: DataService, useFactory: () => spyOnClass(DataService)},
            {provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef)},
            {provide: MatSnackBar, useFactory: () => spyOnClass(MatSnackBar)}


          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(MatDialogRef);
    notificationService = TestBed.get(MatSnackBar);

    component = fixture.componentInstance;
    const homes = [{
      title: 'Home 1',
      image: 'http://fpoimg.com/300x250?text=Preview',
      location: 'new york',
      price: '125'
    }];
    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should show title ', () => {
    expect(el('[data-test="title"]').textContent).toContain('Book Home 1');
  });

  it('should show price', () => {
    expect(el('[data-test="price"]').textContent).toContain('$125 per night');
  });

  it('should show check in date field',
     () => {
    expect(el('[data-test="check-in"]')).toBeTruthy();
     });

  it('should show check out date field', () => {
    expect(el('[data-test="check-out"]')).toBeTruthy();
  });

  it('should show total price', () => {
    // user enters check in date 8/20/20
    const checkIn = el('[data-test="check-in"] input');
    checkIn.value = '8/20/20';
    checkIn.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // user enters checkout date 8/23/20
    const checkOut = el('[data-test="check-out"] input');
    checkOut.value = '8/23/20';
    checkOut.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // asset that the total shows 3 x 125=375
    expect(el('[data-test="total"]').textContent).toContain('Total: $375');

  });

  it('should book home after clicking the Book button', () => {

    dataService.bookHome$.and.returnValue(of(null));
    // user enters check in date 8/20/20
    const checkIn = el('[data-test="check-in"] input');
    checkIn.value = '8/20/20';
    checkIn.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // user enters checkout date 8/23/20
    const checkOut = el('[data-test="check-out"] input');
    checkOut.value = '8/23/20';
    checkOut.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // click the book button
    el('[data-test="book-button"] button').click();

    // assert that the data service was use to book the home.
    expect(dataService.bookHome$).toHaveBeenCalled();

  });

  it('should close the dialog and show notification after the book button is clicked', () => {

    dataService.bookHome$.and.returnValue(of(null));
    // user enters check in date 8/20/20
    const checkIn = el('[data-test="check-in"] input');
    checkIn.value = '8/20/20';
    checkIn.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // user enters checkout date 8/23/20
    const checkOut = el('[data-test="check-out"] input');
    checkOut.value = '8/23/20';
    checkOut.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // click the book button
    el('[data-test="book-button"] button').click();

    expect(dialogService.close).toHaveBeenCalled();
    expect(notificationService.open).toHaveBeenCalled();
  });

});
