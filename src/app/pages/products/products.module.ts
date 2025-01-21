import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ProductsModule {}
