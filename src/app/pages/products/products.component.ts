import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productData: any[] = [];
  categoryData: string[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  constructor(private productsService: ProductsService) {}
  searchQuery: string = '';

  ngOnInit() {
    //products fetch service
    this.productsService
      .getProducts()
      .pipe(take(1))
      .subscribe((response) => {
        this.productData = response.products;
        this.filteredProducts = this.productData;
      });

    //categories fetch service
    this.productsService
      .getCategories()
      .pipe(take(1))
      .subscribe((response) => {
        this.categoryData = response.categories;
      });
  }

  //get products based on category
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  //search functionality
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
