import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GetTestApiResponse} from "../models/get-test-api-response";
import {TestState} from "../models/test-state";

interface AppState {
  test: TestState;
}

export const selectTest = createFeatureSelector<any>('test');

// export const selectTestState = (state: AppState) => state.test;
//
// export const selectTest = createSelector(
//   selectTestState,
//   (state: TestState) => state.test
// );

