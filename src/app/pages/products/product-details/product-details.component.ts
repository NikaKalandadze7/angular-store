import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { take } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/interfaces/product.interface';
@Component({
  selector: 'app-product-details',
  standalone: false,

  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
    if (this.productId) {
      this.productsService
        .getSpecificProduct(this.productId)
        .pipe(take(1))
        .subscribe((response) => {
          this.product = response.product;
          console.log(response.product);
        });
    }
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
