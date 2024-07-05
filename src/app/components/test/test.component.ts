import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import {filter, Observable, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test/test.selectors";
import {TestState} from "../../models/test-state";
import {DynamicFormComponent} from "../shared/dynamic-form/dynamic-form.component";
import {NavigationEnd, Router} from "@angular/router";
import {clearStateAction} from "../../store/test/actions/clear-state.actions";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    NgForOf,
    DynamicFormComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();
  test$: Observable<TestState> = new Observable();


  constructor(
    private store: Store,
    private router: Router,
  ) {}


  ngOnInit() {
    this.test$ = this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))

    this.router.events.pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(() => {
      this.store.dispatch(clearStateAction.clearState());
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
