import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorViewComponent } from './navigator-view.component';

describe('NavigatorViewComponent', () => {
  let component: NavigatorViewComponent;
  let fixture: ComponentFixture<NavigatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
