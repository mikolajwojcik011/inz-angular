import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TestState} from "./test.reducer";
import {GetTestApiResponse} from "../models/get-test-api-response";

interface AppState {
  test: TestState;
}

export const selectTest = createFeatureSelector<GetTestApiResponse>('test');
