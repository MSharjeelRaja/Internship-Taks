import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgeFilterDirective } from '../directives/age-filter.directive';
import { SpaceCheckerDirective } from '../directives/space-checker.directive';
import { WordByWordDirective } from '../directives/word-by-word.directive';

export interface User {
  name: string;
  age: number;
  salary: number;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AgeFilterDirective, WordByWordDirective, SpaceCheckerDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='hello'
  users: User[] = [
    { name: 'Ali', age: 15, salary: 50000, status: 'active' },
    { name: 'Shahid', age: 30, salary: 75000, status: 'inactive' },
    { name: 'Ahmed', age: 25, salary: 60000, status: 'active' },
    { name: 'RAFAY', age: 43, salary: 55000, status: 'inactive' },
    { name: 'sharjeel', age: 17, salary: 25000, status: 'active' },
  ];

  paragraph = '';
  displayedText = '';
  displayText = signal('');

  send() {
    this.displayedText = this.paragraph;
    this.displayText.set('');
  }

  onWordShow(word: string) {
    this.displayText.set(word);
  }
}
