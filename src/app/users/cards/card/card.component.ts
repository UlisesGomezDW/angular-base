import { Component, Input } from '@angular/core';
import { Info } from '../../../app.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data: Info = { name: '' };
}
