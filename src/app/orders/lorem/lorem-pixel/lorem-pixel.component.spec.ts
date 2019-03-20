import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremPixelComponent } from './lorem-pixel.component';

describe('LoremPixelComponent', () => {
  let component: LoremPixelComponent;
  let fixture: ComponentFixture<LoremPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
