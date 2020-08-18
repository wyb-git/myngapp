import { Injectable } from '@angular/core';
//import { promise } from 'protractor';
//import { resolve } from 'dns';
//import 'angular-base64/angular-base64';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable()
export class ShopCarService {
  public curRouter = '0';
  public products:any[] = [];
  public items:any[] = [];
  public serverUrlGet = 'http://dvlp.wyb.com/server/angHttpServe.php?op=get&&data=';
  public serverUrlPos = 'http://dvlp.wyb.com/server/angHttpServe.php?op=pos&&data=';
  
  constructor(
    private http: HttpClient,
  ) {

  }

  //new Buffer正确执行的前提，在polyfills.ts文件加两行代码
  base64Encode(str):any{
    let result = new Buffer(str).toString('base64');
    return result;
  }

  //new Buffer正确执行的前提，在polyfills.ts文件加两行代码
  base64Decode(str):any{
    let result = new Buffer(str, 'base64').toString();
    return result;
  }

  httpGetBase64(param):any{
    return new Promise((resolve, reject)=>{
      let bs64Param = this.base64Encode(param);
      this.http.get(this.serverUrlGet + bs64Param).subscribe(response =>{
        let objData: any = response;
        let strData: any = this.base64Decode(objData.data);
        objData = JSON.parse(strData);
        resolve(objData);   
        //console.log(objData);     
      })
    })
  }

  httpPosBase64(param):any{
    return new Promise((resolve, reject)=>{
      let bs64Param = this.base64Encode(param);
      this.http.get(this.serverUrlPos + bs64Param).subscribe(response =>{
        let objData: any = response;
        let strData: any = this.base64Decode(objData.data);
        objData = JSON.parse(strData);
        resolve(objData);   
        //console.log(objData);     
      })
    })
  }

  postData()
  {
    //let mainUrl = 'http://cloudpf.weunit.cn/admin/ApsMps/';
    let mainUrl = 'http://dvlp.wyb.com/index.php/index/Apsmps/';
    //GET--查询主表
    /*this.http.get(mainUrl+'getApsMain?ordertype=1&mpsid=2020&customer=迪卡侬').subscribe(response =>{
      let objData: any = response;
      //let jsonObjData = JSON.parse(objData.data);
      //console.log(jsonObjData);   
      console.log(objData);   
    })*/

    //GET--获取主表统计数
    /*this.http.get(mainUrl+'getApsMainSum').subscribe(response =>{
      let objData: any = response;
      //let jsonObjData = JSON.parse(objData.data);
      //console.log(jsonObjData);   
      console.log(objData);   
    })*/

    //GET--查询明细
    /*this.http.get(mainUrl+'getApsDetail?mpsplanallnewGuid=26750075535360001').subscribe(response =>{
      let objData: any = response;
      //let jsonObjData = JSON.parse(objData.data);
      //console.log(jsonObjData);   
      console.log(objData);   
    })*/

    //GET--获取用户列表
    /*this.http.get(mainUrl+'getUserList').subscribe(response =>{
      let objData: any = response;
      //let jsonObjData = JSON.parse(objData.data);
      //console.log(jsonObjData);   
      console.log(objData);   
    })*/   

    //PUT--主表批量保存
    /*let data = [{"mpsplanallnewGuid":"26750075535360001","State":"安排中"},
                {"mpsplanallnewGuid":"26750075535360002","State":"安排中","DayQty5":"220"}];
    this.http.put(mainUrl+'saveApsMain',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })*/

    //PUT--明细批量保存
    let data = [{"mpsplanallexGuid":"26750075535360004","mpsplanallnewGuid":"26750075535360001","OverTime":"3","TSOverTime":"6"},
                {"mpsplanallexGuid":"26750075535360005","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360006","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360007","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360008","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360009","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360010","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360011","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360012","mpsplanallnewGuid":"26750075535360001"},
                {"mpsplanallexGuid":"26750075535360013","mpsplanallnewGuid":"26750075535360001"}];
    this.http.put(mainUrl+'saveApsDetail',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })

    //PUT--批量安排
    /*let data = [{"mpsplanallexGuid":"26750075535360004","mpsplanallnewGuid":"26750075535360001","Period":"3","CPPerson":"吴燕兵","CPPlanStartDate":"2020-08-02","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360005","mpsplanallnewGuid":"26750075535360001","Period":"3","CPPerson":"吴燕兵","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360006","mpsplanallnewGuid":"26750075535360001","Period":"5","CPPerson":"吴工","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360007","mpsplanallnewGuid":"26750075535360001","Period":"3","CPPerson":"吴燕兵","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360008","mpsplanallnewGuid":"26750075535360001","Period":"3","CPPerson":"吴工","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360009","mpsplanallnewGuid":"26750075535360001","Period":"3","CPPerson":"吴燕兵","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360010","mpsplanallnewGuid":"26750075535360001","Period":"5","CPPerson":"吴燕兵","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360011","mpsplanallnewGuid":"26750075535360001","Period":"2","CPPerson":"吴燕兵","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360012","mpsplanallnewGuid":"26750075535360001","Period":"1","CPPerson":"吴工","CPPlanStartDate":"","CPPlanDate":""},
                {"mpsplanallexGuid":"26750075535360013","mpsplanallnewGuid":"26750075535360001","Period":"1","CPPerson":"吴工","CPPlanStartDate":"","CPPlanDate":""}];
    this.http.put(mainUrl+'apsBatchSchedule',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })*/

    //PUT--保存单条明细
    /*let data = [{
      "mpsplanallexGuid":"26750075535360004",
      "mpsplanallnewGuid":"26750075535360001",
      "Endstate":"已完成"
      }];
    this.http.put(mainUrl+'saveApsDetailRow',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })*/

    //PUT--审核
    /*let data = 'mpsplanallnewGuid=26750075535360001';
    this.http.put(mainUrl+'ApsMainCheck',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })*/

    //PUT--完成
    /*let data = 'mpsplanallnewGuid=26750075535360001';
    this.http.put(mainUrl+'ApsMainFinish',data).subscribe(response =>{
        console.log(response);
        //let arrData:any = response;
        //f(arrData.code == 0)
        //  console.log(arrData.msg); 
    })*/

    //POST--微信推送
    /*let data = new FormData();
    data.append('msgtitle','你下的订单已同步成功');
    data.append('msgbody','款号：3509；款名：戈斯达');
    data.append('receiveusers','吴燕兵');
    data.append('receivetels','13639149215');
    data.append('mpsid','202007-0001');
    data.append('matid','000000003399');
    data.append('requiredate','2020-08-30');
    data.append('customer','迪卡侬');
    this.http.post(mainUrl+'sendMpsMsg',data).subscribe(response =>{
        let arrData:any = response;
        //if(arrData.code == 0)
          console.log(response);  
    })*/
  }

  addToCar(product) {
    this.items.push(product);
    this.postData();
  }

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.items.length;
  }

  clearCar() {
    this.items = [];
    return this.items;
  }  
}