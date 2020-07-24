import { Component, OnInit } from '@angular/core';
import { TablistComponent } from '../tablist.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() public tabcaption = '';
  @Input() public tabindex = 0; 

  constructor(
    public tablist: TablistComponent,
  ){

  }

  ngOnInit(): void {
  }

  tabClick(){
    this.tablist.curindex = this.tabindex;
  }

}
