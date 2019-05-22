import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ITodo } from 'src/app/todo/todo.models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  public editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.editForm = this.fb.group(this.data.todo);
  }

  submit() {
    const update: ITodo = this.editForm.value;

    this.dialogRef.close(update);
  }

}
