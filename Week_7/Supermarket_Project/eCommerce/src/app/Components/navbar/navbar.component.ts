import { CommonModule, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf, CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() user: any;
  isShow: boolean = false;
  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.isShow && !this.eRef.nativeElement.contains(target)) {
      this.isShow = false;
    }
  }
  toggleShow() {
    this.isShow = !this.isShow;
  }
}
