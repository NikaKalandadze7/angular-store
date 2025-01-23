import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class CartModule {}
