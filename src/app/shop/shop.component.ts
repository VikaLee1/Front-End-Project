import { Component, OnInit } from '@angular/core';
import { IProducts } from '../items/InterfaceItems';
import { products } from '../items/items';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Array<IProducts>= products

  constructor(private cs: ServiceService) { }

  ngOnInit(): void {
  }

  addToCart(product:IProducts){
    alert("You add this service to the cart")
    this.cs.addToCart(product)
  }


}



