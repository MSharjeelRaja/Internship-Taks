import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private firebaseURL =
    'https://shopping-login-a417e-default-rtdb.firebaseio.com/products';

  constructor(private http: HttpClient) {}

  addproduct(product: Product): Observable<any> {
    console.log(product)
    return this.http.post(`${this.firebaseURL}.json`, product);
  }

  getProduct(): Observable<{ [key: string]: Product }> {
    return this.http.get<{ [key: string]: Product }>(
      `${this.firebaseURL}.json`
    );
  }

  updateproduct(key: string, product: Product): Observable<any> {
    return this.http.put(`${this.firebaseURL}/${key}.json`, product);
  }

  deleteproduct(key: string): Observable<any> {
    return this.http.delete(`${this.firebaseURL}/${key}.json`);
  }
  getcart() {
    const cartData = localStorage.getItem('cartitem');
    console.log(cartData)
    return cartData ? JSON.parse(cartData) : [];
  }
}
