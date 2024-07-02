import {createReducer, on} from "@ngrx/store";
import {TestApiActions} from "./test.actions";
import {TestState} from "../models/test-state";
import {HttpErrorResponse} from "@angular/common/http";

interface AppState {
  test: TestState;
  submitTestStart: boolean;
  submitTestSuccess: boolean;
  submitTestErrorMessage: HttpErrorResponse | null;
  getTestStart: boolean;
  getTestSuccess: boolean;
  getTestErrorMessage: HttpErrorResponse | null;
}

export const initialState:AppState = {
  test: {
    question_arr: [],
    id_question_arr: []
  },
  submitTestStart: false,
  submitTestSuccess: false,
  submitTestErrorMessage: null,
  getTestStart: false,
  getTestSuccess: false,
  getTestErrorMessage: null
}

export const testReducer = createReducer(
  initialState,
  on(TestApiActions.fetchTestSchema, (state: AppState) => {
    return {
      ...state,
      getTestStart: true,
    }
  }),
  on(TestApiActions.fetchTestSchemaSuccess, (state: AppState, action) => {
    return {
      ...state,
      test: action,
      getTestStart: false,
      getTestSuccess: true,
    }
  }),
  on(TestApiActions.fetchTestSchemaFailure, (state: AppState, action) => {
    return {
      ...state,
      getTestStart: false,
      getTestErrorMessage: action.error,
    }
  }),
  on(TestApiActions.submitTest, (state: AppState) => {
    return {
      ...state,
      submitTestStart: true,
    }
  }),
  on(TestApiActions.submitTestSuccess, (state: AppState) => {
    return {
      ...state,
      submitTestStart: false,
      submitTestSuccess: true,
    }
  }),
  on(TestApiActions.submitTestFailure, (state: AppState, action) => {
    return {
      ...state,
      submitTestStart: false,
      submitTestErrorMessage: action.error,
    }
  }),
)
