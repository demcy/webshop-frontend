import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: {image: string, name:string, price:number, category:string}[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("Cart component");
    this.cartItems = this.cartService.itemsInCart;
    this.calculateSumOfCart();
  }

  onRemoveFromCart(index: number) {
    this.cartService.itemsInCart.splice(index, 1);
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    // this.cartService.itemsInCart.splice(0);
    this.cartService.itemsInCart = [];
    this.cartItems = this.cartService.itemsInCart;
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(element => {
      this.sumOfCart += element.price;
    });
  }
}
