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



  // added by viktoria 

  // to delete everything from the cart
  clearCart(){
    this.products =[];
    return this.products;
  }

  // delete only one item from the shopping cart
  clearItem(i:number){
    this.products.splice(i,1);
  }

  // total price for services
  getTotal(){
    let total: number=0;
    for(let item of this.products){
      total +=item.price;
    }
    return total;
  }

}
