import {createActionGroup, props} from "@ngrx/store";
import {GetTestApiResponse} from "../models/get-test-api-response";

export const TestApiActions = createActionGroup({
  source: 'Test API',
  events: {
    'Fetch Test Schema': props<{ test: GetTestApiResponse }>(),
  }
});
