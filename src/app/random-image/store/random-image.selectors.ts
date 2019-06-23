import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRandomImage from './random-image.reducer';
import { AppState } from '../../../app/reducers';

export const selectRandomImageState = createFeatureSelector<AppState, fromRandomImage.IRandomImageState>('randomImageState');

export const selectSpeed = createSelector(
  selectRandomImageState,
  fromRandomImage.getSpeed
);

export const selectPhoto = createSelector(
  selectRandomImageState,
  fromRandomImage.getPhoto
);
