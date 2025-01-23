import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartTotalPrice: number = 0;
  cartTotalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getCartTotalPrice();
    this.cartTotalQuantity = this.cartService.getCartTotalQuantity();
  }

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.cart = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getCartTotalPrice();
    this.cartTotalQuantity = this.cartService.getCartTotalQuantity();
  }
  addToCart(item: any) {
    this.addToCart(item);
    this.cartTotalPrice = this.cartService.getCartTotalPrice();
    this.cartTotalQuantity = this.cartService.getCartTotalQuantity();
  }

  checkout() {
    console.log('Go to checkout');
  }
}
