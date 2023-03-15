import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelViewpartComponent } from './level-viewpart.component';

describe('LevelViewpartComponent', () => {
  let component: LevelViewpartComponent;
  let fixture: ComponentFixture<LevelViewpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelViewpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelViewpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
