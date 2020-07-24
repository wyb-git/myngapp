import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apsmain',
  templateUrl: './apsmain.component.html',
  styleUrls: ['./apsmain.component.css']
})
export class ApsmainComponent implements OnInit {
  public mpsid = '订单号';
  public customer = '客户';
  public matcode = '款号';
  public tablist:any[] = ["未安排(201)","已安排(8)","已完成(2)","全部(211)"];
  constructor() { }

  ngOnInit(): void {
  }
  
  doSearch(){
    this.tablist = ["未安排(204)","已安排(18)","已完成(20)","全部(238)"]
  }

}
