import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true,
})
export class UnderlineDirective {
  constructor(private hostElement: ElementRef<HTMLElement>) {}

  @Input() color = 'black';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.textDecoration = 'underline dotted';
    this.hostElement.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hostElement.nativeElement.style.textDecoration = 'none';
    this.hostElement.nativeElement.style.textDecorationColor = 'none';
  }
}
