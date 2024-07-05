import { Injectable } from '@angular/core';
import {PostTestService} from "../services/post-test.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TestApiActions} from "../actions/test.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class PostTestEffect {
  constructor(
    private actions$: Actions,
    private postTestService: PostTestService
  ) {}

  postTest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestApiActions.postTest),
      mergeMap(action =>
        this.postTestService.postTest(action.payload).pipe(
          map(() => {
            return TestApiActions.postTestSuccess();
          }),
          catchError((error: HttpErrorResponse) => {
            return of(TestApiActions.postTestFailure({ error }));
          }
        )
      )
    )
  ));
}
