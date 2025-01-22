import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
  standalone: false,
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discount: number): string {
    if (discount > 5) {
      const discountedPrice = price - (price * discount) / 100;
      return `$ ${discountedPrice.toFixed(2)} (${discount}% off)`;
    }
    return `${price.toFixed(2)}`;
  }
}
