import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttegramListComponent } from './ottegram-list.component';

describe('OttegramListComponent', () => {
  let component: OttegramListComponent;
  let fixture: ComponentFixture<OttegramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttegramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttegramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
