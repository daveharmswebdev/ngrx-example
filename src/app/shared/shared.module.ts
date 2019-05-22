import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogService } from './custom-dialog.service';
import { CustomMaterialModule } from '../core/material.module';
import { EditTodoComponent } from './DialogComponents/edit-todo/edit-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditTodoComponent],
  entryComponents: [EditTodoComponent],
  providers: [CustomDialogService]
})
export class SharedModule { }
