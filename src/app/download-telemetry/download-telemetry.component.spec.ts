import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTelemetryComponent } from './download-telemetry.component';

describe('DownloadTelemetryComponent', () => {
  let component: DownloadTelemetryComponent;
  let fixture: ComponentFixture<DownloadTelemetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadTelemetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
