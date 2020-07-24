import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {

  @Input() public tablist:any[]=[];
  public curindex=0;
  constructor() { }

  ngOnInit(): void {
  }

}
