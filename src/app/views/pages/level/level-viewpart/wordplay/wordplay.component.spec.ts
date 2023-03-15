import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordplayComponent } from './wordplay.component';

describe('WordplayComponent', () => {
  let component: WordplayComponent;
  let fixture: ComponentFixture<WordplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
