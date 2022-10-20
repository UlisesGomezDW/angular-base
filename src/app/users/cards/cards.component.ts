import { Component, Input } from '@angular/core';
import { Info } from '../../app.types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  visible: boolean = true;

  @Input() users: Info[] = [];

  toggle() {
    this.visible = !this.visible;
  }
}
