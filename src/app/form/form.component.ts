import { Component, EventEmitter, Output } from '@angular/core';
import { Info } from '../app.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() onChange: EventEmitter<Info> = new EventEmitter();

  people: Info = {
    name: '',
  };

  add() {
    this.onChange.emit(this.people);
    this.people = {
      name: '',
    };
  }
}
