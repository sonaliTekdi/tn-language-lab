import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAndWriteComponent } from './think-and-write.component';

describe('ThinkAndWriteComponent', () => {
  let component: ThinkAndWriteComponent;
  let fixture: ComponentFixture<ThinkAndWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAndWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinkAndWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
