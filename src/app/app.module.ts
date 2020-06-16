import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOpComponent } from './product-op/product-op.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopCarService } from './shop-car.service';
import { CarSubmitComponent } from './car-submit/car-submit.component';
import { JsonpModule} from "@angular/http";
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'; 

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent},
      { path: 'car-submit', component: CarSubmitComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductOpComponent,
    ProductDetailComponent,
    CarSubmitComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ShopCarService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/