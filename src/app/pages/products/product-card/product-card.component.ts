import { Component, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
@Component({
  selector: 'app-product-card',
  standalone: false,

  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() item: any;
  constructor(private cartService: CartService) {}
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
