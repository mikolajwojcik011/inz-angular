import {createReducer, on} from "@ngrx/store";
import {TestApiActions} from "./test.actions";
import {TestState} from "../models/test-state";

export const initialState:TestState = {
  test: null
}

export const testReducer = createReducer(
  initialState,
  on(TestApiActions.fetchTestSchema, (_state, {test }) => ({test}))
)
