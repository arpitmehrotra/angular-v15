import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import { UsersListCardComponent } from '../users-list-card/users-list-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UsersListCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  constructor(readonly userSvc: UsersService) {}

  ngOnInit(): void {}
}
