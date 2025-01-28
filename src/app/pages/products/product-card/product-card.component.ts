import { Component, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/interfaces/product.interface';
@Component({
  selector: 'app-product-card',
  standalone: false,

  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() item!: Product;
  constructor(private cartService: CartService) {}
  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
