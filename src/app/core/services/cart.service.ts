import { Injectable } from '@angular/core';
import { ExtendedProduct, Product } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ExtendedProduct[] = [];
  private cartSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.updateCartQuantity();
  }

  getCart() {
    return this.cart;
  }

  addToCart(item: Product) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const discountedPrice =
        item.discount > 5
          ? item.price - (item.price * item.discount) / 100
          : item.price;
      this.cart.push({ ...item, quantity: 1, discountedPrice });
    }
    this.saveCart();
    this.updateCartQuantity();
  }

  removeFromCart(itemId: number) {
    const itemIndex = this.cart.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      if (this.cart[itemIndex].quantity > 1) {
        this.cart[itemIndex].quantity -= 1;
      } else {
        this.cart.splice(itemIndex, 1);
      }
      this.saveCart();
      this.updateCartQuantity();
    }
  }
  addQuantityInCart(item: Product) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;

      this.saveCart();
    }
  }
  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartQuantity();
  }

  getCartTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  }
  getCartTotalQuantity() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
  private updateCartQuantity() {
    const totalQuantity = this.getCartTotalQuantity();
    this.cartSubject.next(totalQuantity);
  }
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getCartQuantityObservable() {
    return this.cartSubject.asObservable();
  }
}
