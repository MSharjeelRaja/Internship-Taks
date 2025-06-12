import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-persone-iinfo',
  standalone: true,
  templateUrl: './persone-iinfo.component.html',
  styleUrls: ['./persone-iinfo.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,

    NgIf,
    NgStyle,
  ],
})
export class PersoneIinfoComponent {
  @Input() form!: FormGroup;
  @Input() error = false;

  nextForm() {
    if (
      this.form.get('name')?.invalid ||
      this.form.get('Age')?.invalid ||
      this.form.get('PhoneNo')?.invalid
    ) {
      this.form.get('name')?.markAsTouched();
      this.form.get('Age')?.markAsTouched();
      this.form.get('PhoneNo')?.markAsTouched();
      this.error = true;
      return;
    }

    this.error = false;
    console.log(this.form.value);
  }
  @Output() back = new EventEmitter<void>();
  prevForm() {}
}
