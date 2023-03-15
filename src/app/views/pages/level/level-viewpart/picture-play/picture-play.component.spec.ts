import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePlayComponent } from './picture-play.component';

describe('PicturePlayComponent', () => {
  let component: PicturePlayComponent;
  let fixture: ComponentFixture<PicturePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
