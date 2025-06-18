import { MatTableModule } from '@angular/material/table';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { TestChartComponent } from '../test-chart/test-chart.component';
import { AllProductsComponent } from '../all-products/all-products.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  imports: [
    NavbarComponent,
    TestChartComponent,
    CommonModule,
    AllProductsComponent,
    MatCardModule,
    MatTableModule,
  ],
  standalone: true,
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
})
export class AdminHomeComponent {
  name: string = '';
  displayedColumns: string[] = ['Name', 'Price', 'customerid', 'date'];

  constructor(private route: ActivatedRoute, private service: ProductService) {}
  cart: Product[] = [];

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    this.cart = this.service.getcart();

    console.log(this.cart);
  }
}
