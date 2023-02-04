import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseenterDirective } from 'src/app/directives/mouseenter.directive';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Test Element</p> `,
  styles: [],
  hostDirectives: [MouseenterDirective],
})
export class TesterComponent {}
