import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttegramMainPictureComponent } from './ottegram-main-picture.component';

describe('OttegramMainPictureComponent', () => {
  let component: OttegramMainPictureComponent;
  let fixture: ComponentFixture<OttegramMainPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttegramMainPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttegramMainPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
