import { Component, Input, signal, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgStyle } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatChipsModule,
  MatChipInputEvent,
  MatChipEditedEvent,
} from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-educational-iinfo',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    NgStyle,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './educational-iinfo.component.html',
  styleUrls: ['./educational-iinfo.component.scss'],
})
export class EducationalIinfoComponent {
  @Input() form!: FormGroup;
  @Input() error: boolean = false;

  // educational-iinfo.component.ts
  get skills(): string[] {
    return this.form?.get('skills')?.value || [];
  }

  remove(skill: string): void {
    const skills = this.skills.filter((s) => s !== skill);
    this.form.get('skills')?.setValue(skills);
  }

  edit(skill: string, event: MatChipEditedEvent): void {
    const value = event.value.trim();
    if (!value) {
      this.remove(skill);
      return;
    }
    const skills = this.skills.map((s) => (s === skill ? value : s));
    this.form.get('skills')?.setValue(skills);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const updatedSkills = [value, ...this.skills];
      this.form.get('skills')?.setValue(updatedSkills);
    }
    event.chipInput?.clear();
  }
}
