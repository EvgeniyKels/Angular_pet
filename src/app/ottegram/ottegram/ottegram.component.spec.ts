import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttegramComponent } from './ottegram.component';

describe('OttegramComponent', () => {
  let component: OttegramComponent;
  let fixture: ComponentFixture<OttegramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttegramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
