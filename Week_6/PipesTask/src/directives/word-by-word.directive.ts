import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { signal, effect } from '@angular/core';

@Directive({
  selector: '[appWordByWord]',
  standalone: true,
})
export class WordByWordDirective {
  @Input() appWordByWord!: string;
  @Output() wordshow = new EventEmitter<string>();

  private words: string[] = [];
  private currentIndex = 0;

  private displayText = signal('');

  constructor() {
    effect(() => {
      this.wordshow.emit(this.displayText());
    });
  }

  ngOnChanges() {
    if (this.appWordByWord) {
      this.startDisplay();
    }
  }

  private startDisplay() {
    this.words = this.appWordByWord.split(' ');
    this.currentIndex = 0;
    this.displayText.set('');

    setInterval(() => {
      if (this.currentIndex < this.words.length) {
        const nextWord = this.words[this.currentIndex];
        this.displayText.update(
          (current) => current + (current ? ' ' : '') + nextWord
        );

        this.currentIndex++;
      }
    }, 600);
  }
}
