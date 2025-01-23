import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
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
    }
  }
  addQuantityInCart(item: any) {}
  clearCart() {
    this.cart = [];
    this.saveCart();
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
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
