import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopCarService } from './shop-car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public jsonData:any[] = [];
  constructor(
    public router: Router,
    private carService: ShopCarService,
  ) { 
      //
  }

  ngOnInit() {
    this.router.events.subscribe((event) =>{
      this.carService.curRouter = this.router.url;
    })
  }
  
  ngOnDestroy(){
    //this.router
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/