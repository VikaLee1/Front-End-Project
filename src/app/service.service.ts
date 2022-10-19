import { Injectable } from '@angular/core';
import { IProducts } from './items/InterfaceItems';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  products:Array<IProducts>=[]

  constructor() { }


  addToCart(product:IProducts){
    // this.items.push(dish)
    if (this.products.find((val) => val.name == product.name)) {
      
      product.qtty++;
    } else {
      this.products.push(product);
    }
  }

  showProduct(){
    return this.products
  }

}
