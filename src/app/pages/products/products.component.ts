import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../core/services/products.service';
import { take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .pipe(take(1))
      .subscribe((response) => {
        this.data = response;
        console.log(response);
      });
  }
}
