import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceChecker]',
  standalone: true
})
export class SpaceCheckerDirective {

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    if (event.key === ' ' && (input.selectionStart === 0 || input.selectionEnd === 0)) {
      event.preventDefault();
    }
  }
}
