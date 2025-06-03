import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {
  FormControl,
  FormGroup,

  Validators,
} from '@angular/forms';
import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
   ],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MondayTask';
  kilometers=signal(0)
  liters=signal(0)
 avg = computed(() => {
  return this.liters() > 0
    ? +(this.kilometers() / this.liters()).toFixed(1)
    : 0;
});


  }

