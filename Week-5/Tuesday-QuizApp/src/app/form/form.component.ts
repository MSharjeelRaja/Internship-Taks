import { HttpClient } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { Component } from '@angular/core';

import { Questions } from '../questions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timeInterval } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-form',
  imports: [
    MatRadioModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  questions: Questions[] = [];
  length = 0;
  i = 0;
  selectedAnswer: string = '';
  score = 0;
  answers: any = [];
  loading = false;
  userid = 0;
  react = false;
  user: User | null = null;
  constructor(
    private client: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  apiurl = 'https://683e89f11cd60dca33dc067b.mockapi.io/products/questions';
  ngOnInit() {
    this.loading = true;

    this.route.paramMap.subscribe((p) => {
      this.userid = Number(p.get('id'));
    });

    const storedusers = localStorage.getItem('currentuser');
    this.user = storedusers ? JSON.parse(storedusers) : null;
    setTimeout(() => {
      this.loading = false;

      this.client.get<Questions[]>(this.apiurl).subscribe((d) => {
        this.questions = d
          .filter((question) => question.Technology === this.user?.Technology)
          .slice(0, 6);

        console.log('Filtered questions:', this.questions);
        this.length = this.questions.length;
        this.loading = false;
      });
    }, 1000);
    console.log(
      'in form' +
        this.user +
        'id is' +
        this.userid +
        'questions' +
        this.questions
    );
  }

  next() {
    const current = this.questions[this.i];
    this.answers.push({
      question: current.question,
      selectedAnswer: this.selectedAnswer,
      correctAnswer: current.correctopt,
    });
    if (current.correctopt === this.selectedAnswer) {
      this.score++;
    }
    if (this.i >= this.questions.length - 1) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const percentage = Number(
          ((this.score / this.questions.length) * 100).toFixed(2)
        );

        if (this.user) {
          this.user.score = this.score;
          this.user.percentage = percentage;
          localStorage.setItem('quizAnswers', JSON.stringify(this.answers));
          localStorage.setItem('currentuser', JSON.stringify(this.user));
          this.router.navigate(['/result', this.userid]);
        }
      }, 1000);
      return;
    }
    this.i++;
    this.selectedAnswer = '';
  }
}
