import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to Cart');
  readonly addToCart = output<Product>();

  protected onAddToCart() {
    //console.log('Bottun was clicked');
    this.addToCart.emit(this.product());
  }
}
