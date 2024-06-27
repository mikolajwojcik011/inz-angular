import {createFeatureSelector} from '@ngrx/store';
import {GetTestApiResponse} from "../models/get-test-api-response";
import {TestState} from "../models/test-state";

interface AppState {
  test: TestState;
}

export const selectTest = createFeatureSelector<GetTestApiResponse>('test');
