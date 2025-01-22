import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,

  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() item: any;

  onAddToCart() {
    this.item.id;
  }
}
