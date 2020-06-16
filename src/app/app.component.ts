import { Component } from '@angular/core';
//import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public jsonData:any[] = [];
  constructor(
    //private http: Http,
    ) { 
      //
  }
  ngOnInit() {
    /*this.http.get('assets/shipping.json').subscribe(data => {
        this.jsonData = [];//JSON.parse(data._body);
        console.log(data._body);
      });*/       
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/