import { Component, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Product } from '../product';
//NgForOf import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphone with noise cancellation',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness with this advanced smartwatch featuring ...',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerful bass and 12 hour battery life.',
      price: 79.99,
    },
  ])
}
