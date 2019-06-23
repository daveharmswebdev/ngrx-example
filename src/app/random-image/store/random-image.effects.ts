import { Injectable } from '@angular/core';
import { RandomImageActions, FetchImage, RandomImageActionsTypes, FetchImageSuccess, FetchImageFailure } from './random-images.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RandomImageService } from '../random-image.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, catchError, map } from 'rxjs/operators';

@Injectable()
export class RandomImageEffects {

  constructor(
    private actions$: Actions<RandomImageActions>,
    private randomImageService: RandomImageService
  ) {}

  @Effect()
  fetchImage$: Observable<Action> = this.actions$.pipe(
    ofType<FetchImage>(RandomImageActionsTypes.FetchImage),
    switchMap(action => {
      return this.randomImageService.getImage(action.payload).pipe(
        map(image => new FetchImageSuccess(image)),
        catchError(error => of(new FetchImageFailure(error)))
      );
    })
  );
}
