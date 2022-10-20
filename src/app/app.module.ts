import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { FormModule } from './form/form.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, FormModule, CardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
