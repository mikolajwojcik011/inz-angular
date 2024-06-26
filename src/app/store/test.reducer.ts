import {createReducer, on} from "@ngrx/store";
import {TestApiActions} from "./test.actions";
import {GetTestApiResponse} from "../models/get-test-api-response";

export interface TestState {
  test: GetTestApiResponse | null;
}

export const initialState:TestState = {
  test: null
}

export const testReducer = createReducer(
  initialState,
  on(TestApiActions.fetchTestSchema, (_state, {test }) => ({test}))
)
