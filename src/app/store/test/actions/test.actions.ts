import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {TestState} from "../../../models/test-state";
import {HttpErrorResponse} from "@angular/common/http";
import {SubmitTestApiPayload} from "../../../models/submit-test-api-payload";

export const TestApiActions = createActionGroup({
  source: 'Test API',
  events: {
    'Get Test Schema': props<{ publicKey: string }>(),
    'Get Test Schema Success': props<TestState>(),
    'Get Test Schema Failure': props<{ error: HttpErrorResponse }>(),
    'Post Test': props<{ payload: SubmitTestApiPayload  }>(),
    'Post Test Success': emptyProps(),
    'Post Test Failure': props<{ error: HttpErrorResponse }>(),
  }
});
