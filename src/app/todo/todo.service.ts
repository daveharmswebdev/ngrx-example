import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodo } from './todo.models';
import { Update } from '@ngrx/entity';

const TEST_TODOS: ITodo[] = [
  {
    id: '1',
    title: 'Buy milk',
    description: 'Corned beef salami capicola beef',
    owner: 'Morse',
    complete: true
  },
  {
    id: '2',
    title: 'mow lawn',
    description:  'Short loin brisket picanha tail spare ribs tri-tip short ribs tongue turkey beef',
    owner: 'Morse',
    complete: false
  },
  {
    id: '3',
    title: 'fix sink',
    description: 'Boudin shank jowl alcatra',
    owner: 'Morse',
    complete: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(id: string): Observable<ITodo[]> {
    return of(TEST_TODOS);
  }

  updateTodo(update: Update<ITodo>): Observable<ITodo> {
    const { id, changes } = update;
    const todoToUpdate = TEST_TODOS.find(todo => todo.id === id);

    return of({...todoToUpdate, ...changes});
  }
}


