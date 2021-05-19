import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // items: any[] = [];
  items: Item[] = [];
  kuupaev = new Date();

  constructor(private cartService: CartService, 
    private itemService: ItemService) {
   }

  ngOnInit(): void {
    //console.log("Home component");
    this.items = this.itemService.getItems();
  }

  onAddToCart(item: Item) {
    this.cartService.addToCart(item);
  }
}
