// src/app/store/test.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestApiActions } from './test.actions';
import { map, mergeMap } from 'rxjs/operators';
import {TestService} from "./test.services";
import {tap} from "rxjs";

@Injectable()
export class TestEffects {
  fetchTestSchema$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestApiActions.fetchTestSchema),
      mergeMap(action =>
        this.testService.getTest(action.publicKey).pipe(
          map(response => {
            // Transform the response into an object of objects
            const transformedResponse = {
              question_arr: response['question-arr'] || [],
              id_question_arr: response['question-id-arr'] || []
            };
            return TestApiActions.fetchTestSchemaSuccess(transformedResponse );
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
