import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {

  public tablist:any[]=["未安排(201)","已安排(8)","已完成(2)","全部(211)"];
  public curindex=0;
  constructor() { }

  ngOnInit(): void {
  }

}
