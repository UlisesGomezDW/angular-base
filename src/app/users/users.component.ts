import { Component, OnInit } from '@angular/core';
import { Info } from '../app.types';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  get data(): Info[] {
    return this.userService.getData;
  }

  constructor(private userService: UserService) {}
}
