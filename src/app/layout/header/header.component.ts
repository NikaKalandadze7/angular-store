import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartTotalQuantity: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to the cart quantity observable
    this.cartSubscription = this.cartService
      .getCartQuantityObservable()
      .subscribe((quantity) => {
        this.cartTotalQuantity = quantity;
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
