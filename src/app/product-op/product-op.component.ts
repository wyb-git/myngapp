import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-op',
  templateUrl: './product-op.component.html',
  styleUrls: ['./product-op.component.css']
})
export class ProductOpComponent implements OnInit {
  @Input() product:any;
  @Output() notify = new EventEmitter();
  @Input() onShare:any;

  constructor() {

  }

  ngOnInit() {

  }

  doOnShare(){
    this.onShare();
  }
}