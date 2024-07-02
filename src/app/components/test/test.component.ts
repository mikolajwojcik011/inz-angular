import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {TestState} from "../../models/test-state";
import {InputRadioComponent} from "../shared/input-radio/input-radio.component";
import {QuestionComponent} from "./question/question.component";
import {DynamicFormComponent} from "../shared/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    InputRadioComponent,
    ReactiveFormsModule,
    NgForOf,
    QuestionComponent,
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
