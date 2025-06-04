import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-result',
  imports: [NgFor, MatButtonModule, NgStyle],
  standalone: true,
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  id = 0;
  score: number | null = 0;
  answers: any[] = [];
  user: User | null = null;
  questionsCount = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.id = Number(p.get('marks'));
    });
    const storedAnswers = localStorage.getItem('quizAnswers');
    this.answers = storedAnswers ? JSON.parse(storedAnswers) : [];
    this.questionsCount = this.answers.length;
    const user = localStorage.getItem('currentuser');
    this.user = user ? JSON.parse(user) : [];
    this.score = this.user?.score ?? 0;
    console.log('in result' + this.user + 'id is' + this.id);
  }
  navigate() {
    this.router.navigate(['detailform']);
  }
}
