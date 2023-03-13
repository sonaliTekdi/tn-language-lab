import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-telemetry',
  templateUrl: './download-telemetry.component.html'
})
export class DownloadTelemetryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const link = document.createElement("a");
    const content = localStorage.getItem('telemetryLogs');
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
