import { NgModule }         from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShopCarService } from '../shop-car.service';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http'; 

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
    private cartService: ShopCarService,
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
    this.items = this.cartService.getItems();
    this.http.get('assets/shipping.json').subscribe(response =>{
      this.jsonData = response;
      //console.log(response);
    })
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('订单已提交', customerData);

    this.items = this.cartService.clearCar();
    this.checkoutForm.reset();
  }

  onShippingPriceClick(e){
    if(this.showState == 0){
      this.showState = 1;
    }
    else{
      this.showState = 0;
    }
  }

}