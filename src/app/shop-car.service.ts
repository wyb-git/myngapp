import { Injectable } from '@angular/core';

@Injectable()
export class ShopCarService {
  public items = [];

  constructor(
  ) {

  }

  addToCar(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.items.length;
  }

  clearCar() {
    this.items = [];
    return this.items;
  }
}