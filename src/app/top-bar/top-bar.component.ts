import { Component, OnInit } from '@angular/core';
import { ShopCarService } from '../shop-car.service';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public curUrl="/2";
  public searchValue:any [] = ['搜索宝贝','搜索商品','搜索'];
  public searchHis:any [] = [];

  constructor(
    private http:HttpClient,
    public carService: ShopCarService,
  ) { 

  }

  ngOnInit() {
    //this.searchHis = JSON.parse(localStorage.getItem('searchHis'));
  } 

  doSearchProd(){
    let strParam = '{"dataType":"prdList","searchValue":"' + this.searchValue + '"}';
    this.carService.httpGetBase64(strParam).then((response:any)=>{
      this.carService.products = response;       
      //console.log(response);
      /*if (this.searchHis.indexOf(this.searchValue) == -1){
        this.searchHis.push(this.searchValue);
        localStorage.setItem('searchHis', JSON.stringify(this.searchHis));
        console.log(this.searchHis);
      }*/         
    })
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/