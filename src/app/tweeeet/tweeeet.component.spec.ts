import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeeetComponent } from './tweeeet.component';

describe('TweeeetComponent', () => {
  let component: TweeeetComponent;
  let fixture: ComponentFixture<TweeeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
