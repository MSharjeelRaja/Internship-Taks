import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FloatLabelType,
  MatFormFieldModule,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { PersoneIinfoComponent } from './steps/persone-iinfo/persone-iinfo.component';
import { InformationaIinfoComponent } from './steps/informationa-iinfo/informationa-iinfo.component';
import { EducationalIinfoComponent } from './steps/educational-iinfo/educational-iinfo.component';
@Component({
  selector: 'app-detail-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatIconModule,

    MatButtonModule,

    MatIconModule,

    PersoneIinfoComponent,
    InformationaIinfoComponent,
    EducationalIinfoComponent,
  ],
  standalone: true,
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.scss',
})
export class DetailFormComponent {
  constructor(private route: Router) {}
  @ViewChild('stepper') stepper!: MatStepper;
  isLinear = false;
  step = 1;
  error = false;
  user: User[] = [];
  skills: string[] = [];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required]),
    Experience: new FormControl('', [Validators.required]),
    Technology: new FormControl('', [Validators.required]),
    PhoneNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('^\\923[0-9]{8}$'),
    ]),
    skills: new FormControl<string[]>([]),
    Gpa: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      const ids = Math.floor(Math.random() * 1000) + 1;

      const newUser: User = {
        id: ids,
        name: this.form.value.name!,
        Age: Number(this.form.value.Age!),
        Experience: this.form.value.Experience!,
        Technology: this.form.value.Technology!,
        PhoneNo: this.form.value.PhoneNo!,
        Gpa: Number(this.form.value.Gpa!),
        gender: this.form.value.gender!,
        address: this.form.value.address!,
        percentage: 0,
        score: 0,
        skills: this.form.value.skills || [],
      };
      localStorage.setItem('currentuser', JSON.stringify(newUser));
      this.user.push(newUser);

      localStorage.setItem('user', JSON.stringify(this.user));
      this.form.reset();
      this.route.navigate(['form/', ids]);
    } else {
      this.form.markAllAsTouched();
      alert('Form is invalid!');
      this.error = true;
    }
  }

  nextForm() {

    const stepIndex = this.stepper.selectedIndex;

    if (stepIndex === 0) {

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
    }

    if (stepIndex === 1) {

      if (
        this.form.get('Experience')?.invalid ||
        this.form.get('Technology')?.invalid ||
        this.form.get('Gpa')?.invalid
      ) {
        this.form.get('Experience')?.markAsTouched();
        this.form.get('Technology')?.markAsTouched();
        this.form.get('Gpa')?.markAsTouched();
        this.error = true;
        return;
      }
    }


    this.error = false;
    this.stepper.next();
  }

  prevForm() {
    this.stepper.previous();
  }
}
