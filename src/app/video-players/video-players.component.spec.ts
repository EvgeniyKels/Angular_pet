import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayersComponent } from './video-players.component';

describe('VideoPlayersComponent', () => {
  let component: VideoPlayersComponent;
  let fixture: ComponentFixture<VideoPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
