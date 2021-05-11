import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsInCart: {image: string, name:string, price:number, category:string}[] = [];

  constructor() { }
}
