import { Component, OnInit, AfterViewInit, NgZone, Renderer2, OnDestroy } from '@angular/core';
import * as _ from 'lodash-es';
import * as iziModal from 'izimodal/js/iziModal';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of, throwError } from 'rxjs';
import { map, mergeMap, tap, delay, first } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
declare var jQuery: any;
jQuery.fn.iziModal = iziModal;

/**
 * Component Launches the Interactive Editor in a IFrame Modal
 */
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  private buildNumber: string;
  public logo: string;
  public showLoader = true;
  public contentDetails: any;
  public ownershipType: Array<string>;
  public queryParams: any;
  public videoMaxSize: any;
  contentEditorURL = 'content-editor/index.html';

  /**
   * Default method of class InteractiveEditorComponent
   */
  constructor(private activatedRoute: ActivatedRoute, private zone: NgZone, private renderer: Renderer2,
              private router: Router, private sanitizer: DomSanitizer
  ) {
    this.buildNumber = '';
    this.videoMaxSize = '150';
  }
  ngOnInit() {
    let instance = this;
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    
        this.logo = 'https://dev.sunbirded.org/assets/images/sunbird_logo.png'; // added
        //this.ownershipType = data.ownershipType;
        setTimeout(function(){
          instance.initEditor();
        },5000)
        this.setWindowContext();
        this.setWindowConfig();
    // this.getContentDetails().pipe( first(),
    //   tap((data: any) => {
    //     console.log("aaaaaaaaaaaaaaaa", data);
    //     this.logo = 'https://dev.sunbirded.org/assets/images/sunbird_logo.png'; // added
    //     this.ownershipType = data.ownershipType;
    //     this.initEditor();
    //     this.setWindowContext();
    //     this.setWindowConfig();
    //   }),
    //   delay(10)) // wait for iziModal lo load
    //   .subscribe((data) => {
    //     // jQuery('#contentEditor').iziModal('open');
    //     this.setRenderer();
    //     this.showLoader = false;
    //   },
    //     (error) => {
    //       // if (error === 'NO_PERMISSION') {
    //       //   this.toasterService.error(this.resourceService.messages.emsg.m0013);
    //       // } else if (['RESOURCE_SELF_LOCKED', 'RESOURCE_LOCKED'].includes(_.get(error, 'error.params.err'))) {
    //       //   this.toasterService.error(_.replace(error.error.params.errmsg, 'resource', 'content'));
    //       // } else {
    //       //   this.toasterService.error(this.resourceService.messages.emsg.m0004);
    //       // }
    //       this.closeModal();
    //     });
  }

  editorURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.contentEditorURL + '?' + this.buildNumber);
  }

  private getContentDetails() {
    if (this.queryParams.identifier) {
      const options: any = { params: { mode: 'edit' } };
        const data = {"id":"api.content.read","ver":"1.0","ts":"2023-02-23T18:08:56.018Z","params":{"resmsgid":"2337ab20-b3a5-11ed-827a-edd2af60aa77","msgid":"2332a210-b3a5-11ed-a17d-b3ade16c7a73","status":"successful","err":null,"errmsg":null},"responseCode":"OK","result":{"content":{"ownershipType":["createdBy"],"code":"Enter title","channel":"01309282781705830427","description":"Enter description ","language":["English"],"mimeType":"application/vnd.ekstep.ecml-archive","createdOn":"2023-02-23T09:00:20.366+0000","objectType":"Content","primaryCategory":"Learning Resource","lastUpdatedOn":"2023-02-23T09:00:20.366+0000","contentType":"Resource","identifier":"do_213739153984208896114","audience":["Student"],"visibility":"Default","mediaType":"content","osId":"org.ekstep.quiz.app","languageCode":["en"],"versionKey":"1677142820366","license":"CC BY 4.0","framework":"knowlg_k-12","createdBy":"5a587cc1-e018-4859-a0a8-e842650b9d64","name":"Enter title","resourceType":"Learn","status":"Draft"}}};
        this.contentDetails = data.result.content;
        return this.contentDetails;
    } else {
      return of({});
    }
  }

  private setRenderer() {
    this.renderer.listen('window', 'editor:metadata:edit', () => {
      this.closeModal();
    });
    this.renderer.listen('window', 'editor:window:close', () => {
      this.closeModal();
    });
    this.renderer.listen('window', 'editor:content:review', () => {
      this.closeModal();
    });
  }
  private initEditor() {
    jQuery('#contentEditor').iziModal({
      title: '',
      iframe: true,
      iframeURL: this.contentEditorURL + '?' + this.buildNumber,
      navigateArrows: false,
      fullscreen: true,
      openFullscreen: true,
      closeOnEscape: false,
      overlayClose: false,
      overlay: false,
      overlayColor: '',
      history: false,
      onClosing: () => {
        this.zone.run(() => {
          this.closeModal();
        });
      }
    });
  }
  private setWindowContext() {
    window.context = {
      "user": {
        "id": "5a587cc1-e018-4859-a0a8-e842650b9d64",
        "name": "N11",
        "orgIds": ["01309282781705830427", "01274256635219968039517"],
        "organisations": {
          "01309282781705830427": "NIT",
          "01274256635219968039517": "MPPS MUKKADAMPALLI"
        }
      },
      "did": "5d498109ff49c0d81a66921555309496",
      "sid": "WgmuuWmXDsk6ZaMj27t_9t8HtjNwykH0",
      "contentId": "do_113536016074268672144",
      "pdata": {
        "id": "dev.sunbird.portal",
        "ver": "4.9.0",
        "pid": "sunbird-portal.contenteditor"
      },
      "contextRollUp": {
        "l1": "01309282781705830427",
        "l2": "01274256635219968039517"
      },
      "tags": [
        "01309282781705830427",
        "01274256635219968039517",
        "01309282781705830427"
      ],
      "channel": "01309282781705830427",
      "framework": "ekstep_ncert_k-12",
      "ownershipType": ["createdBy", "createdFor"],
      "timeDiff": -280.363,
      "uid": "5a587cc1-e018-4859-a0a8-e842650b9d64",
      "etags": {
        "app": [],
        "partner": [],
        "dims": []
      }
    };
   
      window.context.contentId = "do_213739153984208896114";
  }
  private setWindowConfig() {
    window.config = {
      baseURL: 'https://dev.knowlg.sunbird.org',
      apislug: '/action',
      build_number: 'BUILDNUMBER',
      pluginRepo: '/plugin',
      aws_s3_urls: ['https://s3.ap-south-1.amazonaws.com/ekstep-public-dev/', 'https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/'],
      plugins: [
        {id: 'org.ekstep.assessmentbrowser', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.colorpicker', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.stage', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.text', ver: '1.2', type: 'plugin'},
        {id: 'org.ekstep.shape', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.image', ver: '1.1', type: 'plugin'},
        {id: 'org.ekstep.audio', ver: '1.1', type: 'plugin'},
        {id: 'org.ekstep.scribblepad', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.stageconfig', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.telemetry', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.preview', ver: '1.2', type: 'plugin'},
        {id: 'org.ekstep.activitybrowser', ver: '1.3', type: 'plugin'},
        {id: 'org.ekstep.download', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.unsupported', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.wordinfobrowser', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.viewecml', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.utils', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.editorstate', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.iterator', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.navigation', ver: '1.0', type: 'plugin'},
        {id: 'org.ekstep.developer', ver: '1.0', type: 'plugin'}
      ],
      corePluginsPackaged: false,
      dispatcher: 'local',
      localDispatcherEndpoint: '/app/telemetry',
      previewURL: '/content/preview/preview.html'
    }; // cloneDeep to preserve default config
    window.config.build_number = this.buildNumber;
    window.config.headerLogo = this.logo;
    window.config.aws_s3_urls = ['https://s3.ap-south-1.amazonaws.com/ekstep-public-qa/', 'https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/', 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/']
    window.config.enableTelemetryValidation = false; // telemetry validation
    window.config.lock = _.pick(this.queryParams, 'lockKey', 'expiresAt', 'expiresIn');
    window.config.videoMaxSize = this.videoMaxSize;
  }

  /**
   * checks the permission using state, status and userId
   */
  private validateRequest() {
    // const validStatus = _.indexOf(this.configService.editorConfig.CONTENT_EDITOR.contentStatus, this.contentDetails.status) > -1;
    // const validState = _.indexOf(this.configService.editorConfig.CONTENT_EDITOR.contentState, this.routeParams.state) > -1;
    // if (this.contentDetails.mimeType === this.configService.appConfig.CONTENT_CONST.CREATE_LESSON && validStatus) {
    //   if (validState && this.contentDetails.createdBy !== this.userService.userid) {
    //     return true; // we need to remove this case or validState should be changed
    //   } else if (validState && this.contentDetails.createdBy === this.userService.userid) {
    //     return true;
    //   } else if (validState && _.includes(this.contentDetails.collaborators, this.userService.userid)) {
    //     return true;
    //   } else if (this.contentDetails.createdBy === this.userService.userid) {
    //     return true;
    //   }
    //   return false;
    // }
    // return false;
  }

  /**
   * Re directed to the draft on close of modal
   */
  closeModal() {
    this.showLoader = false;
    if (document.getElementById('contentEditor')) {
      document.getElementById('contentEditor').remove();
    }
    // Redirect to home page or content list page
    console.log('close modal');
  }

  ngOnDestroy() {
    if (document.getElementById('contentEditor')) {
      document.getElementById('contentEditor').remove();
    }
    const removeIzi = document.querySelector('.iziModal-isAttached');
    if (removeIzi) {
      removeIzi.classList.remove('iziModal-isAttached');
    }
  }
}
