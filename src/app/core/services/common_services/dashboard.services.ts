import { Injectable } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { environment } from "src/environments/environment";
import { UserSessionService } from '../../services/usersession.service';
@Injectable()
export class StateDashboardService {
  private getSignedUrlApi = environment.getSignedUrlApi;
  private readingFileApi = environment.readingFileApi;
  constructor(private dataService: DataService, private userSessionService: UserSessionService) { }

  getDashboardData() {
    return this.dataService.getData("/api/dashboard", true);
  }
  //   getGeoServerData(data: any) {
  //     // tslint:disable-next-line: max-line-length
  //     // let url = '/geoserver/' + this.geoserverStoreName + '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + this.geoserverStoreName + ':DOF&outputFormat=application%2Fjson&srsName=EPSG:4326';
  //     // tslint:disable-next-line: max-line-length
  //     const url = '/geoserver/' + this.geoserverStoreName + '/ows?service=WFS&version=1.0.0&request=GetFeature';
  //     // if (cqlfilter) {
  //     //     url += '&cql_filter=' + cqlfilter;
  //     // }
  //     return this.dataService.getGeoServerData(url, data, true);
  // }
  getDashboardDetailsData(distId, eduDistId, blockId, beomapId) {
    return this.dataService.getDataSample(
      "/sta1/" +
      distId +
      "?edudstId=" +
      eduDistId +
      "&blockId=" +
      blockId +
      "&beomapId=" +
      beomapId,
      true
    );
  }



  getDownloadData() {
    return this.dataService.getData("/api/downloads/?report_level=1", true);
  }

  // Gcc Download
  getGCCDownloadData() {
    return this.dataService.getData("/api/downloads/?report_level=6", true);
  }

  // Health Download

  getHealthDownloadData() {
    return this.dataService.getData("/api/downloads/?report_level=7", true);
  }

  // TNMSC Download
  getnmscDownloadData() {
    return this.dataService.getData("/api/downloads/?report_level=8", true);
  }

  // ITK Downloads
  getITKDownload() {
    return this.dataService.getData("/api/downloads/?report_level=9", true);
  }

  // Vendor and Health District Downloads
  getvendorHealthDistDownload() {
    return this.dataService.getData("/api/downloads/?report_level=10", true);

  }

  getDownloadDataByValue(report_value) {
    return this.dataService.getData(
      "/api/downloads/?report_level=" + report_value,
      true
    );
  }
  getSignedUrl(bucketName, ext, fileName, expiry) {
    let params = {
      bcktId: bucketName,
      ext: ext,
      filename: fileName,
      expiry: expiry,
    };
    return this.dataService.getDataWithParams(
      this.getSignedUrlApi,
      params,
      true
    );
  }
  uploadFile(path, file) {
    return this.dataService.put(path, file);
  }
  getUploadedFiles(bucketName, fileName, expiry) {
    let params = { bcktId: bucketName, filename: fileName, expiry: expiry };
    return this.dataService.getDataWithParams(
      this.readingFileApi,
      params,
      true
    );
  }
  getDikshaToken() {
    return this.dataService.post("/api/dikshaLogin", true);
  }

  getClassWiseStrengthData(distid, edudstId, blockId, beomapId) {
    return this.dataService.getDataSample1(
      "common007/" +
      distid +
      "?edudstId=" +
      edudstId +
      "&blockId=" +
      blockId +
      "&beomapId=" +
      beomapId,
      true
    );
  }

  getDeData(distid, edudstId, blockId, beomapId) {
    return this.dataService.getDataSample1(
      "dee/dee005/" +
      distid +
      "?edudstId=" +
      edudstId +
      "&blockId=" +
      blockId +
      "&beomapId=" +
      beomapId,
      true
    );
  }

  // getClassWiseSchoolTypeData(code,blockId,edudstId,beomapId)
  // {
  //   return this.dataService.getDataSample1("commonpool/"+code+'/?blockId='+blockId+'&edudstId='+edudstId+'&beomapId='+beomapId,true);
  // }
  save_download_history(data) {
    return this.dataService.post("/api/downloadhistory", data);
  }
  get_download_history() {
    return this.dataService.post("/api/downloadhistoryGet", true);
  }
  OTP_VERIFICATION(data) {
    return this.dataService.post("/api/OtpVerification", data);
  }

  // ------------------------------------------For Downloads Reports------------------------------------//
  getDownloadDataNew(usertype, flag) {
    return this.dataService.getDataSample1(
      "downloadreportname?usertype=" + usertype + "&flag=" + flag,
      true
    );
  }

  download(url: string) {
    return this.dataService.getReport(url);
  }

  getTrianingData(distid, edudstId, blockId, beomapId) {
    return this.dataService.getDataSample1(
      "scerttrng/" +
      distid +
      "?edudstId=" +
      edudstId +
      "&blockId=" +
      blockId +
      "&beomapId=" +
      beomapId,
      true
    );
  }

  getTrianingcompData(distid, edudstId, blockId, beomapId) {
    return this.dataService.getDataSample1(
      "scerttrng/quizcomp/" +
      distid +
      "?edudstId=" +
      edudstId +
      "&blockId=" +
      blockId +
      "&beomapId=" +
      beomapId,
      true
    );
  }
  gettotalsurveycount() {
    return this.dataService.getData("/api/DashNumForStateCount", true);
  }
  getcwsncount() {
    return this.dataService.getData("/api/DashNumForStateCountDa", true);
  }
  getplostcount() {
    return this.dataService.getData("/api/DashNumForStateCountPl", true);
  }
  getsurveyerscount() {
    return this.dataService.getData("/api/DashNumForStateCountDis", true);
  }
  gettotalsurveycountdist(distid) {
    return this.dataService.getData(
      "/api/DashNumForDisCount?DisId=" + distid,
      true
    );
  }
  getcwsncountdist(distid) {
    return this.dataService.getData(
      "/api/DashNumForDisCountDa?DisId=" + distid,
      true
    );
  }
  getplostcountdist(distid) {
    return this.dataService.getData(
      "/api/DashNumForDisCountPl?DisId=" + distid,
      true
    );
  }
  getsurveyerscountdist(distid) {
    return this.dataService.getData(
      "/api/DashNumForDisCountDis?DisId=" + distid,
      true
    );
  }
  getstatebasedReport() {
    return this.dataService.getData("/api/RepForStateDis", true);
  }
  getdistbasedReport(distid) {
    return this.dataService.getData(
      "/api/RepForStateBlock?DisId=" + distid,
      true
    );
  }
  getTotalSchoolCount() {
    return this.dataService.getData("/api/IDENoOfSchool", true);
  }
  getSchoolMapped() {
    return this.dataService.getData("/api/IDENoOfSchoolMapped", true);
  }
  getSchoolToBeMapped() {
    return this.dataService.getData("/api/IDENoOfSchoolToBeMapped", true);
  }

  // <----------------video-mapping-dashboard -------------------by Anbu--------------->

  getTaxonomyCount() {
    return this.dataService.getData('/api/TaxonomyCount', true)
  }

  // <----------------video-mapping-dashboard -------------------by Anbu--------------->
  getQuestCount() {
    return this.dataService.getData('/api/AllQuestCount', true)
  }
  getMrksections(Code, Date) {
    return this.dataService.getDataSample('/genattendance/mrksections?code=' + Code + '&edate=' + Date, true)
  }
  getMarksectionsblk(Code, Date, edudstId) {
    return this.dataService.getDataSample('/genattendance/marksectionsblk?code=' + Code + '&edate=' + Date + '&edudstId=' + edudstId, true)
  }

  getMarksectionsEduDist(Code, Date, distId)
  {
    return this.dataService.getDataSample('/genattendance/marksectionsedudst?code=' + Code + '&edate=' + Date + '&distId=' + distId, true)

  }

  getMarksectionsschl(Code, Date, blockId) {
    return this.dataService.getDataSample('/genattendance/marksectionsschl?code=' + Code + '&edate=' + Date + '&blockId=' + blockId, true)
  }

  //oosc trace component

  getTimeline(emisId){
    return this.dataService.getData('/api/GetStuTrckByEmisId?EmisId=' + emisId,true)
  }
  getSurveyData(emisId){
    return this.dataService.getData('/api/GetOscStuTrckByEmisId?EmisId=' + emisId,true)
  }
}
