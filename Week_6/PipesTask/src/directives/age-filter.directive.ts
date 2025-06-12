import { Directive, Input, HostBinding, computed, signal } from '@angular/core';
@Directive({
  selector: '[appAgeFilter]',
  standalone: true,
})
export class AgeFilterDirective {
  @Input() appAgeFilter!: number;
  @HostBinding('class.bg-red') get isRed() {
    return this.appAgeFilter < 18;
  }

  @HostBinding('class.bg-orange') get isOrange() {
    return this.appAgeFilter >= 18 && this.appAgeFilter <= 25;
  }

  @HostBinding('class.bg-green') get isGreen() {
    return this.appAgeFilter > 25;
  }
}
