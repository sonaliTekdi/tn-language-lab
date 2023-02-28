import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  @ViewChild('preview', { static: false }) previewElement: ElementRef;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const src = this.previewElement.nativeElement.src;
    this.previewElement.nativeElement.src = '';
    this.previewElement.nativeElement.src = src;
    this.previewElement.nativeElement.onload = () => {
      setTimeout(() => {
        this.previewElement.nativeElement.contentWindow.initializePreview({
          "context": {
              "mode": "play",
              "partner": [],
              "pdata": {
                  "id": "dev.sunbird.portal",
                  "ver": "4.9.0",
                  "pid": "sunbird-portal"
              },
              "contentId": "do_11319720466326323219",
              "sid": "I9mq-3VN49rS3uz9J6ucVXxz5Cwf20HE",
              "uid": "5a587cc1-e018-4859-a0a8-e842650b9d64",
              "timeDiff": -1.129,
              "contextRollup": {
                  "l1": "01309282781705830427",
                  "l2": "01274256635219968039517"
              },
              "channel": "01309282781705830427",
              "did": "34a18ad500734f9f94078f92f2403d5b",
              "dims": [
                  "01309282781705830427",
                  "01274256635219968039517",
                  "01309282781705830427"
              ],
              "tags": [
                  "01274256635219968039517",
                  "01309282781705830427"
              ],
              "app": [
                  "01309282781705830427"
              ],
              "cdata": [],
              "userData": {
                  "firstName": "Gourav",
                  "lastName": "More"
              }
          },
          "config": {
              "whiteListUrl": [
                  "https://obj.stage.sunbirded.org/**",
                  "https://*.blob.core.windows.net/**"
              ],
              "showEndPage": false,
              "endPage": [
                  {
                      "template": "assessment",
                      "contentType": [
                          "SelfAssess"
                      ]
                  }
              ],
              "showStartPage": true,
              "host": "",
              "overlay": {
                  "enableUserSwitcher": true,
                  "showOverlay": true,
                  "showNext": true,
                  "showPrevious": true,
                  "showSubmit": false,
                  "showReload": false,
                  "showUser": false,
                  "menu": {
                      "showTeachersInstruction": false
                  }
              },
              "splash": {
                  "text": "",
                  "icon": "",
                  "bgImage": "assets/icons/splacebackground_1.png",
                  "webLink": ""
              },
              "apislug": "/action",
              "repos": [
                  "/sunbird-plugins/renderer"
              ],
              "plugins": [
                  {
                      "id": "org.sunbird.iframeEvent",
                      "ver": 1,
                      "type": "plugin"
                  },
                  {
                      "id": "org.sunbird.player.endpage",
                      "ver": 1.1,
                      "type": "plugin"
                  }
              ],
              "sideMenu": {
                  "showShare": true,
                  "showDownload": true,
                  "showExit": false
              },
              "enableTelemetryValidation": false
          },
          "metadata": {
              "mimeType": "application/vnd.ekstep.h5p-archive",
              "objectType": "Content",
              "primaryCategory": null,
              "artifactUrl": "https://sunbirddevbbpublic.blob.core.windows.net/sunbird-content-staging-knowlg/content/do_213739226601684992115/artifact/1677151692788_do_213739226601684992115.zip",
              "contentType": "Resource",
              "identifier": "do_213739226601684992115",
              "languageCode": [
                  "en"
              ],
              "name": "test"
          },
          "data": {}
      });
        this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
          if (resp.data === 'renderer:question:submitscore') {
            alert('Score has been submited succesfully');
          } else if (resp.data && typeof resp.data === 'object') {
            if (resp.data['player.pdf-renderer.error']) {
              const pdfError = resp.data['player.pdf-renderer.error'];
              if (pdfError.name === 'MissingPDFException') {
                alert('This Pdf has some issue, please try with the differnet pdf content');
              }
            } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
              alert('Max limit reached to attempt the quiz');
            }
          }
        });
      }, 100);
    };
  }

}
