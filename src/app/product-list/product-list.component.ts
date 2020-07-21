import { Component } from '@angular/core';
//import { products } from '../products';
import { ShopCarService } from '../shop-car.service';
//import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(
    public carService: ShopCarService,
    //private http: HttpClient,
  ){

  }

  ngOnInit() {
    /*let param='&&dataType=prdList&&searchValue=吴燕兵搜索宝贝';
    this.carService.httpGet(param).then((response: any)=>{
      this.carService.products = response;        
      //console.log(response);
    })*/
    let strParam = '{"dataType":"prdList","searchValue":""}';
    this.carService.httpGetBase64(strParam).then((response:any)=>{
      this.carService.products = response;       
      //console.log(response);
    })
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  onShare() {
    window.alert('The product has been shared!');
  }  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/