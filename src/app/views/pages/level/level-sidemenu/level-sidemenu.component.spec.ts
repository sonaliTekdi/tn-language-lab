import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSidemenuComponent } from './level-sidemenu.component';

describe('LevelSidemenuComponent', () => {
  let component: LevelSidemenuComponent;
  let fixture: ComponentFixture<LevelSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
