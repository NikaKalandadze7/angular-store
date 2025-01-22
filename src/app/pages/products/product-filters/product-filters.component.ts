import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  standalone: false,

  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css',
})
export class ProductFiltersComponent {
  @Input() categories: string[] = [];
  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchQueryChange = new EventEmitter<string>();

  value = '';

  onCategoryChange(selectedCategory: string) {
    this.categoryChange.emit(selectedCategory);
  }

  onSearchInputChange() {
    this.searchQueryChange.emit(this.value);
  }
}
