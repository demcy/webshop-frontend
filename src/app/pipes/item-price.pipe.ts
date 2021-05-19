import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemPrice'
})
export class ItemPricePipe implements PipeTransform {

  transform(value: number): string {

    
    return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    
  }

}
