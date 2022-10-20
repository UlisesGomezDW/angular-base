import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormModule } from './form/form.module';
import { CardsModule } from './cards/cards.module';
import { UsersComponent } from './users.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [BrowserModule, FormModule, CardsModule],
  providers: [UserService],
})
export class UsersModule {}
