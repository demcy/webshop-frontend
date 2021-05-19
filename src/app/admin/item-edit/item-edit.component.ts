import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  editItemForm!: FormGroup;
  //item!: {image: string, name:string, price:number, category:string};
  id = 0;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("itemId"));
    let item = this.itemService.getItems()[this.id];
    this.editItemForm = new FormGroup({
      name: new FormControl(item.name),
      price: new FormControl(item.price),
      image: new FormControl(item.image),
      category: new FormControl(item.category)
    });
  }

  onSubmit(form: FormGroup) {

    //console.log(form);
    if (form.valid) {
      let item = this.itemService.getItems()[this.id];
      this.itemService.editItem(
        new Item(
        form.value.name,
        form.value.price,
        form.value.image,
        form.value.category,
      ), this.id);
      this.router.navigateByUrl("/admin/esemete-list");
      //form.reset();
    }
  }

}
