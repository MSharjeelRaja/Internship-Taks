import { Product } from './../interfaces/product';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart: Product[] = [];
  constructor(private http: HttpClient) {}
  private baseurl =
    'https://683e89f11cd60dca33dc067b.mockapi.io/products/products';
  getproduct(): Observable<any> {
    return this.http.get(this.baseurl);
  }
  addproduct(product: Product) {
    product.Image =
      'https://thvnext.bing.com/th/id/OIP.Il0AgjfDT-mDEoCTtc4JTgHaHa?w=200&h=200&c=7&r=0&o=7&cb=thvnext&dpr=1.1&pid=1.7&rm=3';
    return this.http.post(
      'https://683e89f11cd60dca33dc067b.mockapi.io/products/products',
      product
    );
  }
  index = 0;
  getcart() {
    const cartData = localStorage.getItem('cartitem');
    return cartData ? JSON.parse(cartData) : [];
  }
  updateproduct(id: string | number, product: Product) {
    return this.http.put(
      `https://683e89f11cd60dca33dc067b.mockapi.io/products/products/${id}`,
      product
    );
  }
}
