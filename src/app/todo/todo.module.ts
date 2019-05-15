import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { CustomMaterialModule } from '../core/material.module';

@NgModule({
  declarations: [TodoHomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todoState', fromTodo.todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    CustomMaterialModule
  ]
})
export class TodoModule { }
