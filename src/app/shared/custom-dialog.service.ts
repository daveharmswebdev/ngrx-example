import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ITodo } from '../todo/todo.models';
import { EditTodoComponent } from './DialogComponents/edit-todo/edit-todo.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(private dialog: MatDialog) { }

  editTodo(todo: ITodo) {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '33%',
      height: '500px',
      data: { todo }
    });

    return dialogRef.afterClosed();
  }

}
