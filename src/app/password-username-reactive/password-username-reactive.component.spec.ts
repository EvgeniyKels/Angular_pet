import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUsernameReactiveComponent } from './password-username-reactive.component';

describe('PasswordUsernameReactiveComponent', () => {
  let component: PasswordUsernameReactiveComponent;
  let fixture: ComponentFixture<PasswordUsernameReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordUsernameReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUsernameReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
