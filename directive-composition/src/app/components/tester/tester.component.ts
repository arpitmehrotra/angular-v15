import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Test Element</p> `,
  styles: [],
})
export class TesterComponent {}
