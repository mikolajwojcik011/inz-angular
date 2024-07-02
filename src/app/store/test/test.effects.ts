import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestApiActions } from './test.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {TestService} from "./test.service";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class TestEffects {
  fetchTestSchema$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestApiActions.getTestSchema),
      mergeMap(action =>
        this.testService.getTest(action.publicKey).pipe(
          map(response => {
            const transformedResponse = {
              question_arr: response['question-arr'] || [],
              id_question_arr: response['question-id-arr'] || []
            };
            return TestApiActions.getTestSchemaSuccess(transformedResponse );
          }),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private testService: TestService
  ) {}
}
