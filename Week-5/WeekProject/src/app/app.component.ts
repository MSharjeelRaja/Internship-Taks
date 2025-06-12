import { Component } from '@angular/core';
import { ServiceService, products } from './../service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  prod: products[] = [];
categories:string[]=[]
  constructor(private service: ServiceService) {


  }

  ngOnInit() {
    this.service.getproducts().subscribe(d => {
      this.prod = d;
  this.categories =[...new Set(d.map(item => item.Category))] ;

      console.log(this.categories);
    });
  }
}
