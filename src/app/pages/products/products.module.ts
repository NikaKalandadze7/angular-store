import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class ProductsModule {}
