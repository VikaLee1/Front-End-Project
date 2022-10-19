import { Component, OnInit } from '@angular/core';
import { products } from '../items/items';
import { IProducts } from '../items/InterfaceItems';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// defyning the array for the cards in the shopping cart
items:Array<IProducts>=[];

  constructor(private cs: ServiceService) { }

  ngOnInit(): void {
   this.items=this.cs.showProduct();
  }


}
