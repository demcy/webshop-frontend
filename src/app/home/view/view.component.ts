import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: {image: string, name:string, price:number, category:string};

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("itemId"));
    this.item = this.itemService.getItems()[id];
  }

}
