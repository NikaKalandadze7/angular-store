import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { take } from 'rxjs';
import { Product } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productData: Product[] = [];
  categoryData: string[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = '';
  constructor(private productsService: ProductsService) {}
  searchQuery: string = '';

  ngOnInit() {
    this.fetchProducts();

    this.fetchCategories();
  }
  private fetchProducts() {
    this.productsService
      .getProducts()
      .pipe(take(1))
      .subscribe((response) => {
        this.productData = response.products;
        this.filteredProducts = this.productData;
      });
  }
  private fetchCategories() {
    this.productsService
      .getCategories()
      .pipe(take(1))
      .subscribe((response) => {
        this.categoryData = response.categories;
      });
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  onSearchQueryChange(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.productData.filter((product) => {
      const matchesCategory =
        !this.selectedCategory || product.category === this.selectedCategory;
      const matchesSearch =
        !this.searchQuery ||
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}
