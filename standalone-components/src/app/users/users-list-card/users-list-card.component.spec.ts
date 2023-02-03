import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListCardComponent } from './users-list-card.component';

describe('UsersListCardComponent', () => {
  let component: UsersListCardComponent;
  let fixture: ComponentFixture<UsersListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UsersListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
