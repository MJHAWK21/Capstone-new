import { Component } from '@angular/core';
import { CartItem } from 'src/app/Model/cart';

import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }
  private calculateTotal() {
    this.total = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
}
}
