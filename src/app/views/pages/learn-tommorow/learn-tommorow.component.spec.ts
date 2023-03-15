import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTommorowComponent } from './learn-tommorow.component';

describe('LearnTommorowComponent', () => {
  let component: LearnTommorowComponent;
  let fixture: ComponentFixture<LearnTommorowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTommorowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnTommorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
