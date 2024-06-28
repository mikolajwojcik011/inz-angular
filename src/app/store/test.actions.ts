import {createActionGroup, props} from "@ngrx/store";
import {TestState} from "../models/test-state";

export const TestApiActions = createActionGroup({
  source: 'Test API',
  events: {
    'Fetch Test Schema': props<{ publicKey: string }>(),
    'Fetch Test Schema Success': props<TestState>(),
    'Fetch Test Schema Failure': props<{ error: string }>()
  }
});
