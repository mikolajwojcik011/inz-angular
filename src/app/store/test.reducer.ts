import {createReducer, on} from "@ngrx/store";
import {TestApiActions} from "./test.actions";
import {GetTestApiResponse} from "../models/get-test-api-response";

export const initialState: GetTestApiResponse = {
  "question-arr": [],
  "question-id-arr": []
}

export const testReducer = createReducer(
  initialState,
  on(TestApiActions.fetchTestSchema, (_state, {test }) => test)
)
