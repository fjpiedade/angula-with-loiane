import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    console.log('Added to Cart: ', product.name);
    this.cartItems.update((items) => [...items, product]);
  }
}
