import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCart: {image: string, name:string, price:number, category:string}[] = [];

  constructor() { }

  addToCart(item: {image: string, name:string, price:number, category:string}) {
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
