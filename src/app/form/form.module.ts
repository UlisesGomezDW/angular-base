import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule],
})
export class FormModule {}
