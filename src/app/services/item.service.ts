import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items = [
    {
        image: 'https://arvutitark.ee/prodpics/563/563471/thumb200/4146257.jpg',
        name: 'Veebikaamera Razer Kiyo Pro',
        price: 190,
        category: 'Arvuti'
    },
    {
        image: 'https://arvutitark.ee/prodpics/561/561211/thumb200/4158556.jpg',
        name: 'ASUS ROG Strix SCAR',
        price: 2300,
        category: 'Arvuti'
    },
    {
        image: 'https://arvutitark.ee/prodpics/551/551262/thumb200/4125756.jpg',
        name: 'Sennheiser CX 400BT True',
        price: 100,
        category: 'Arvuti'
    },
    {
        image: 'https://arvutitark.ee/prodpics/367/367459/thumb200/3717484.jpg',
        name: 'Dell P2419H',
        price: 150,
        category: 'Arvuti'
    },
    {
        image: 'https://arvutitark.ee/prodpics/537/537483/thumb200/4162680.jpg',
        name: 'Xiaomi Mi Electric Scooter Pro 2',
        price: 500,
        category: 'Hobbies'
    },
    {
        image: 'https://arvutitark.ee/prodpics/565/565222/thumb200/4155880.jpg',
        name: 'SONY PLAYSTATION 5',
        price: 710,
        category: 'Game'
    }
  ]

  constructor() { }

  addItem(item: {image: string, name:string, price:number, category:string}) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }
}
