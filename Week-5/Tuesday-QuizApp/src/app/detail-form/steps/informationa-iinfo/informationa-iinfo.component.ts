import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-informationa-iinfo',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    NgFor,
    NgStyle,
  ],
  standalone: true,
  templateUrl: './informationa-iinfo.component.html',
  styleUrl: './informationa-iinfo.component.scss',
})
export class InformationaIinfoComponent {
  @Input() form!: FormGroup;
  @Input() error: boolean = false;
}
