import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';
import { NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  imports: [
    NgIf,
    NavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
  ],
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  productform: FormGroup;
  isEditMode = false;
  imagePreview: string = '';
  user: string = 'admin';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: any,
    @Optional() private dialogRef: MatDialogRef<AddProductComponent>
  ) {
    this.productform = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Category: ['', Validators.required],
      Description: [''],
      Image: [''],
      Stock: [0, Validators.required],
      Price: [0, Validators.required],
    });
  }

  ngOnInit() {
    if (this.dialogData) {

      this.isEditMode = true;
      this.user = this.dialogData.user || 'admin';
      this.productform.patchValue(this.dialogData);
    } else {

      this.route.params.subscribe((params) => {
        this.user = params['user'] || 'admin';
        if (this.route.snapshot.data['product']) {
          this.isEditMode = true;
          this.productform.patchValue(this.route.snapshot.data['product']);
        }
      });
    }
  }

  onSubmit() {
    if (this.productform.invalid) {
      return;
    }

    const formValue = this.productform.value;

    if (this.isEditMode) {
      this.productService.updateproduct(formValue.id, formValue).subscribe({
        next: () => {
          if (this.dialogRef) {
            this.dialogRef.close(true);
            alert('Product Updated')
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate(['/product', this.user]);
              });
          }
        },
        error: (err) => {
          console.error('Error updating product:', err);
        },
      });
    } else {
      this.productService.addproduct(formValue).subscribe({
        next: () => {
           alert('Product Added')
          this.router.navigate(['/product', this.user]);
        },
        error: (err) => {
          console.error('Error adding product:', err);
        },
      });
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.productform.patchValue({ Image: this.imagePreview });
      };
      reader.readAsDataURL(file);
    }
  }
}
