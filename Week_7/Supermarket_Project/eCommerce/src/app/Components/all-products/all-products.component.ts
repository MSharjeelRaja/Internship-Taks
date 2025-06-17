import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Product } from '../../interfaces/product';
import { ProductService } from './../../services/product.service';

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PriceFormatPipe } from '../../../pipes/price-format.pipe';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UpdateProductDirective } from '../../directives/update-product.directive';

@Component({
  selector: 'app-all-products',
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    UpdateProductDirective,
    PriceFormatPipe,
    NavbarComponent,
    NgIf,
  ],
  standalone: true,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  loader = true;
  user = '';
  @Input() users!: string;
  @Input() ascomp: boolean = false;
  constructor(
    private Productservice: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user') || '';
    this.loadProducts();
  }
  loadProducts() {
    console.log('loadProducts() called');

    this.loader = true;
    this.Productservice.getproduct().subscribe((d) => {
      console.log('Products received:', d);
      this.products = d;
      this.loader = false;
    });
  }

  random = Math.floor(Math.random() * 100);
  addtocart(prod: Product) {
    prod.customerid = 'CustomerNo' + this.random;
    prod.date = new Date().toISOString();

    let cart = JSON.parse(localStorage.getItem('cartitem') || '[]');
    cart.push(prod);
    localStorage.setItem('cartitem', JSON.stringify(cart));
    alert(prod.Name + ' Added to cart');
  }
}
