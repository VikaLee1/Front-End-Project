import { Component, OnInit } from '@angular/core';
import { products } from '../items/items';
import { IProducts } from '../items/InterfaceItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// defyning the array for the cards in the shopping cart
items:Array<IProducts>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
