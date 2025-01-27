import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cartTotalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartTotalQuantity = this.cartService.getCartTotalQuantity();
  }
}
