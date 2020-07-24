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
  constructor() { }

  ngOnInit(): void {
  }

}
