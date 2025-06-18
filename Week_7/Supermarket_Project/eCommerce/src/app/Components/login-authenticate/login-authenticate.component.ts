import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';

import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';

import { AuthenticateService } from '../../services/authenticate.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login-authenticate',
  imports: [
    FormsModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    AngularFireAuthModule,
    MatError,
  ],
  standalone: true,
  templateUrl: './login-authenticate.component.html',
  styleUrl: './login-authenticate.component.scss',
})
export class LoginAuthenticateComponent {
  constructor(
    private router: Router,

    private authservice: AuthenticateService
  ) {}
  errormessage: string | null = null;
  name = 'Sharjeel';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);

  async submit() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      this.emailFormControl.markAsTouched();
      this.passwordFormControl.markAsTouched();
      return;
    } else {
      this.authservice
        .login(this.emailFormControl.value!, this.passwordFormControl.value!)
        .subscribe({
          next: () => {
            this.router.navigate(['/admin-home']);
          },
          error: (er) => {
            alert('Invalid Credentials');
            this.errormessage = er.code;
          },
        });
    }
  }
}
