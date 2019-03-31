import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNavigatorComponent } from './books-navigator.component';

describe('BooksNavigatorComponent', () => {
  let component: BooksNavigatorComponent;
  let fixture: ComponentFixture<BooksNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
