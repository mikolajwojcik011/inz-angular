import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test/test.selectors";
import {TestState} from "../../models/test-state";
import {DynamicFormComponent} from "../shared/dynamic-form/dynamic-form.component";

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

  constructor(
    private store: Store,
  ) {}

  test$: Observable<TestState> = new Observable();

  ngOnInit() {
    this.test$ = this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
