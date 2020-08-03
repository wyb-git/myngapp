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
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    this.http.post(
      'http://cloudpf.weunit.cn/admin/ApsMps/getApsMainSum',
      'params={"ordertype":1,"mpsid":"2020","customer":"迪卡侬"}',
      httpOptions).subscribe(response=>{console.log(response)})
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