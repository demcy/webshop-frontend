import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCart: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    this.itemsInCart.push(item);
  }

  removeFromCart(index: number) {
    this.itemsInCart.splice(index, 1);
  }

  emptyCart() {
    this.itemsInCart = [];
  }

  getCartItems() {
    return this.itemsInCart;
  }
}
