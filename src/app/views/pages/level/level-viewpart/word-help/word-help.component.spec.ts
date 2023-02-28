import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHelpComponent } from './word-help.component';

describe('WordHelpComponent', () => {
  let component: WordHelpComponent;
  let fixture: ComponentFixture<WordHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
