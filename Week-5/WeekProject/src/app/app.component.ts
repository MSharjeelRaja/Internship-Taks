import { Component } from '@angular/core';
import { ServiceService, products } from './../service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  prod: products[] = [];

  constructor(private service: ServiceService) {


  }

  ngOnInit() {
    this.service.getproducts().subscribe(d => {
      this.prod = d;
      console.log(this.prod);
    });
  }
}
