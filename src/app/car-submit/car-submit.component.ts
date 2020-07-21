import { NgModule }         from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShopCarService } from '../shop-car.service';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-car-submit',
  templateUrl: './car-submit.component.html',
  styleUrls: ['./car-submit.component.css']
})
export class CarSubmitComponent implements OnInit {
  public showState = 0;
  public items:any;
  public checkoutForm: any;
  public jsonData:any;
  constructor(
    private carService: ShopCarService,
    private formBuilder: FormBuilder,
    //private appCmp: AppComponent,
    public http: HttpClient,
    ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });  
  }

  ngOnInit() {
    let strParam = '{"dataType":"spPrice","searchValue":""}';
    this.carService.httpGetBase64(strParam).then((response: any)=>{
      this.jsonData = response;
      console.log(response);
    })
    //
  }

  onSubmit(customerData) {
    let strParam = '{"name":"'+ customerData.name + '","address":"' + customerData.address + '"}';
    this.carService.httpPosBase64(strParam).then((response:any)=>{
      window.alert(response.msg);
    })
  } 

  onShippingPriceClick(){
    if(this.showState == 0){
      this.showState = 1;
    }
    else{
      this.showState = 0;
    }
  }

}