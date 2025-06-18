import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../Components/add-product/add-product.component';
@Directive({
  selector: '[appUpdateProduct]',
  standalone: true,
})
export class UpdateProductDirective {
  @Input('appUpdateProduct') productData: any;
  @Input() user: string = '';

  constructor(private dialog: MatDialog) {}

  @HostListener('click')
  openForm() {
    this.dialog.open(AddProductComponent, {
      width: '800px',

      data: {
        ...this.productData,
        user: this.user,
      },
    });
  }
}
