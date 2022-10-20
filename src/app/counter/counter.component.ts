import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Counter';
  number: number = 0;

  sum() {
    this.number += 1;
  }
  reduce() {
    this.number -= 1;
  }
}
