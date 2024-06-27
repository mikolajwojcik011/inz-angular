import {createReducer, on} from "@ngrx/store";
import {TestApiActions} from "./test.actions";
import {TestState} from "../models/test-state";

export const initialState:TestState = {
  question_arr: [],
  id_question_arr: []
}

export const testReducer = createReducer(
  initialState,
  on(TestApiActions.fetchTestSchemaSuccess, (_state, action) => (action))
)
