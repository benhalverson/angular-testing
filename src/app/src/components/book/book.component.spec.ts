import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


import {BookComponent} from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;


  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [BookComponent],
          providers: [{provide: MAT_DIALOG_DATA, useValue: {}}]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    component = fixture.componentInstance;
    const homes = [{
      title: 'Home 1',
      image: 'http://fpoimg.com/300x250?text=Preview',
      location: 'new yor'
    }];
    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should show title ', () => {
    expect(
        fixture.nativeElement.querySelector('[data-test="title"]').textContent)
        .toContain('Home 1');
  });

  it('should show check in date field', () => {});

  it('should show check out date field', () => {});

  it('should book home after clicking the Book button', () => {});
});
