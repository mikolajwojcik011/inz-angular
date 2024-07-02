import {createActionGroup, props} from "@ngrx/store";
import {TestState} from "../../models/test-state";
import {HttpErrorResponse} from "@angular/common/http";

export const TestApiActions = createActionGroup({
  source: 'Test API',
  events: {
    'Get Test Schema': props<{ publicKey: string }>(),
    'Get Test Schema Success': props<TestState>(),
    'Get Test Schema Failure': props<{ error: HttpErrorResponse }>(),
    'Post Test': props<{ test: TestState }>(),
    'Post Test Success': props<{ test: TestState }>(),
    'Post Test Failure': props<{ error: HttpErrorResponse }>(),
  }
});
