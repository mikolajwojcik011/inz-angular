import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from "./test.reducer";

export const selectTestState = createFeatureSelector<AppState>('test');

export const selectTest = createSelector(
  selectTestState,
  (state: AppState) => state.test
);


