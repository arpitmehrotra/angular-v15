import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { User } from '../users.model';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent {
  user$!: Observable<User | undefined>;

  constructor(private userSvc: UsersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map((param) => {
        return this.userSvc.users[Number(param.get('index'))];
      })
    );
  }
}
