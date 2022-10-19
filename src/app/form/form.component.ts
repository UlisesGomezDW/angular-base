import { Component } from '@angular/core';

interface People {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  people: People = {
    name: '',
  };

  add() {
    console.log(this.people);
  }
}
