import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Counter';
  number: number = 0;
  names: string[] = ['Element1', 'Element2', 'Element3'];
  visible: boolean = true;

  sum() {
    this.number += 1;
  }
  reduce() {
    this.number -= 1;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
