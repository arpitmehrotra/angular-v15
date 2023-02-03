import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../users.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list-card.component.html',
  styleUrls: ['./users-list-card.component.scss'],
})
export class UsersListCardComponent {
  @Input() user!: User;
  @Input() index!: number;
}
