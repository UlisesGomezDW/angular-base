import { Component } from '@angular/core';
// EventEmitter, Output
import { Info } from '../../app.types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  //@Output() onChange: EventEmitter<Info> = new EventEmitter();

  constructor(private userService: UserService) {}

  people: Info = {
    name: '',
  };

  add() {
    this.userService.addItem(this.people);
    this.people = {
      name: '',
    };
  }
}
