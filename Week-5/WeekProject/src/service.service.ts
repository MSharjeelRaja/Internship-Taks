import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface products{
 Name: string;
  Category: string;
  Description: string;
  id: string;
  Image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http :HttpClient) {

   }
  apiurl='https://683e89f11cd60dca33dc067b.mockapi.io/products/products'

  getproducts(){
    return this.http.get<products[]>(this.apiurl);
  }
}
