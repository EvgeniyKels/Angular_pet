import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOrderPendorderComponent } from './coffee-order-pendorder.component';

describe('CoffeeOrderPendorderComponent', () => {
  let component: CoffeeOrderPendorderComponent;
  let fixture: ComponentFixture<CoffeeOrderPendorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeOrderPendorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeOrderPendorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
