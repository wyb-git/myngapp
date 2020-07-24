import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOpComponent } from './product-op/product-op.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopCarService } from './shop-car.service';
import { CarSubmitComponent } from './car-submit/car-submit.component';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { ApsComponent } from './aps/aps.component';
import { ApsmainComponent } from './aps/apsmain/apsmain.component';
import { ApsdetailComponent } from './aps/apsdetail/apsdetail.component'; 

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent},
      { path: 'car-submit', component: CarSubmitComponent},
      { path: 'aps', component: ApsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductOpComponent,
    ProductDetailComponent,
    CarSubmitComponent,
    ApsComponent,
    ApsmainComponent,
    ApsdetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ShopCarService]
})
export class AppModule { 
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/