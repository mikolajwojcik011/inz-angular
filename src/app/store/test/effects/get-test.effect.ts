import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestApiActions } from '../actions/test.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {GetTestService} from "../services/get-test.service";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class GetTestEffect {
  constructor(
    private actions$: Actions,
    private getTestService: GetTestService
  ) {}

  fetchTestSchema$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestApiActions.getTestSchema),
      mergeMap(action =>
        this.getTestService.getTest(action.publicKey).pipe(
          map(response => {
            const transformedResponse = {
              question_arr: response['question-arr'] || [],
              id_question_arr: response['question-id-arr'] || []
            };
            return TestApiActions.getTestSchemaSuccess(transformedResponse );
          }),
          catchError((error: HttpErrorResponse) => {
            return of(TestApiActions.getTestSchemaFailure({ error }));
          }
        )
      )
    )
  ));
}
