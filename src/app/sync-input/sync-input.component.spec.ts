import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncInputComponent } from './sync-input.component';

describe('SyncInputComponent', () => {
  let component: SyncInputComponent;
  let fixture: ComponentFixture<SyncInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
