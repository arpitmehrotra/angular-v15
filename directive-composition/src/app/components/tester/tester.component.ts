import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseenterDirective } from 'src/app/directives/mouseenter.directive';
import { EventDirective } from 'src/app/directives/event.directive';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Test Element</p> `,
  styles: [],
  hostDirectives: [MouseenterDirective, EventDirective],
})
export class TesterComponent implements OnInit {
  eventDirective = inject(EventDirective);
  ngOnInit(): void {
    this.eventDirective.data = {
      propertyOne: 'foo',
      propertyTwo: 'bar',
    };
  }
}
