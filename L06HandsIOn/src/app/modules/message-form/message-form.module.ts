import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageFormComponent } from '../message-form/components/message-form.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MessageFormComponent],
  exports: [MessageFormComponent]
})
export class MessageFormModule { }
