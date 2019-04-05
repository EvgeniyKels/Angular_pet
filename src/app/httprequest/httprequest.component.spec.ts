import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprequestComponent } from './httprequest.component';

describe('HttprequestComponent', () => {
  let component: HttprequestComponent;
  let fixture: ComponentFixture<HttprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
