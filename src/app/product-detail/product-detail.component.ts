import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { ShopCarService } from '../shop-car.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private carService: ShopCarService,
    ) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });        
  }
  addToCart(product) {
    this.carService.addToCar(product);
    console.log(this.carService.items.length);
    window.alert('已加入购物车!');    
  }
}