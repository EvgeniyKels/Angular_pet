import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReactiveFormComponent } from './input-reactive-form.component';

describe('InputReactiveFormComponent', () => {
  let component: InputReactiveFormComponent;
  let fixture: ComponentFixture<InputReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
