import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[appMouseenter]',
  standalone: true,
  hostDirectives: [
    BoldDirective,
    {
      directive: UnderlineDirective,
      inputs: ['color'],
    },
  ],
})
export class MouseenterDirective {
  constructor() {}
}
