import { Component } from '@angular/core';
import { Info } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter';
  data: Info[] = [];

  addItem(event: Info) {
    this.data.push(event);
  }
}
