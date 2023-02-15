import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable()
export class ApiService {

    constructor(private dataService: DataService) {};

    SAVE_API(data){
        debugger;
        return this.dataService.post('/api/DocApi',data);
      }

      GET_API(){
        debugger;
        return this.dataService.getData('/api/DocApiGet',true);
      }
      GET_API_BY_ID(id){
        debugger;
        return this.dataService.getData('/api/DocApiGet?id='+ id,true);
      }


      // report-documentation

      reportDisplay()
      {
        return this.dataService.getData('/api/ReportCsvGetAll' ,true);
      }
      reportDisplaybyid(id)
      {
        debugger;
        return this.dataService.getData('/api/ReportCsvGetByID?IndxID='+ id ,true);
      }
      Report_Post_Data(data){
        debugger;
        return this.dataService.post('/api/ReportCsvCUD', data)
      }

      reportLevelListGet(){
        return this.dataService.getData('/api/getUserCategry', true)
      }

      // report-documentation


      // Query_Database

      getQueryDatabase(){
        debugger;
        return this.dataService.getData('/api/QueryDocDataGetList', true)
      }
      postQueryDatabase(data){
        debugger;
        return this.dataService.post('/api/QueryDocDataCUD', data)
      }

      // Query_Database

      //schedule job

      postschjob(data){
        debugger;
        return this.dataService.post('/api/SchdJobCUD', data)
      }


      //add-survey

      getschlCategory(){
        debugger;
        return this.dataService.getData('/api/GetSclCateId', true)
      }
      getDesignationList(id){
        return this.dataService.getData("/api/TeachNonTeachList?cat_id=" + id, true);
      }

      tableforstateview(FromUsrType){
        return this.dataService.getData("/api/InboxViewMsgCount?FromUsrType=" + FromUsrType, true);
        // return this.dataService.getData("/api/InboxViewMsgCount?FromUsrType=" + FromUsrType +'&ToUsrType=' +ToUsrType , true);
      }

      getDetailsForMessage1(id){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + id, true);
      }
      getDetailsForMessage2(DistId,DeoType){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + DistId +'&DeoType=' +DeoType , true);
      }
      getDetailsForMessage3(DistId,BlkId){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + DistId + '&BlkId=' +BlkId, true);
      }
      getDetailsForMessage4(DistId,BlkId,SchlTypeId,ManageId,CateId){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + DistId + '&BlkId=' +BlkId + '&SchlTypeId=' +SchlTypeId +'&ManageId=' +ManageId + '&CateId=' +CateId , true);
      }
      getDetailsForMessage5(DistId,BlkId,SchlTypeId,ManageId,CateId,TchrCategory,TchrType){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + DistId + '&BlkId=' +BlkId + '&SchlTypeId=' +SchlTypeId +'&ManageId=' +ManageId + '&CateId=' +CateId + '&TchrCategory=' +TchrCategory +'&TchrType=' +TchrType, true);
      }
      getDetailsForMessage6(DistId,BlkId,SchlTypeId,ManageId,CateId,ClsId){
        return this.dataService.getData("/api/GetAllBeoCeoDeoGetList?DistId=" + DistId + '&BlkId=' +BlkId + '&SchlTypeId=' +SchlTypeId +'&ManageId=' +ManageId + '&CateId=' +CateId +'&ClsId=' +ClsId , true);
      }

      getMgmntcode(){
        debugger;
        return this.dataService.getData('/api/getmgmntcode', true)
      }
      getUsertype(){
        debugger;
        return this.dataService.getData('/api/getusrcaty', true)
      }
      getsurveyIdList(){
        debugger;
        return this.dataService.getData('/api/surveyId', true)
      }

      postschlmstSurvey(data){
        debugger;
        return this.dataService.post('/api/schlmstsurvey', data)
      }

      postschlsurveyQustions(data){
        debugger;
        return this.dataService.post('/api/schlsurveyQus', data)
      }

      getSurveyDetails(surveyID){
        debugger;
        return this.dataService.getData('/api/getschlmstsurvey?surveyID='+ surveyID ,true)
      }


      getsAllservey(){
        debugger;
        return this.dataService.getData('/api/getschlmstsurvey', true)
      }

      getindexId(IndexID){
        debugger;
         return this.dataService.getData('/api/getschlmstsurvey?IndexId='+ IndexID ,true )
      }

      getAddQuestionsfortableDisplay(){
        debugger;
        return this.dataService.getData('/api/getschlsurveyQus', true)
      }
      getindexidQuest(IndexId){
        debugger;
        return this.dataService.getData('/api/getschlsurveyQus?IndexId='+ IndexId, true)
      }
      //add-survey


      // finance-invoice-details-start

      vendorDetailsPost(data){
        return this.dataService.post('/api/VendByUid', data)
      }

      vendorIdGet(indexid){
        return this.dataService.getData('/api/GetInvByVid?VendorId='+ indexid, true)
      }

      invoiveIdGet(invoiceid){
        return this.dataService.getData('/api/GetTranDetByIid?InvoiceId='+ invoiceid, true)
      }

      // finance-invoice-details-start

      PostReqFrmEmis(data){
        return this.dataService.post('/api/ReqFrmEmisCUD', data)
      }

      GetReqFrmEmis(){
        return this.dataService.getData('/api/ReqFrmEmisGet', true)
      }



      //Departmental Data Request Form--Anbu

}
