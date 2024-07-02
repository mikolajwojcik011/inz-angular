import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GetTestApiResponse} from "../models/get-test-api-response";
import {TestState} from "../models/test-state";

interface AppState {
  test: TestState;
}

export const selectTestState = createFeatureSelector<AppState>('test');

export const selectTest = createSelector(
  selectTestState,
  (state: AppState) => state.test
);

