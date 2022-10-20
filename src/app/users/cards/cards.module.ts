import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent, CardsComponent],
  exports: [CardsComponent],
  imports: [CommonModule],
})
export class CardsModule {}
