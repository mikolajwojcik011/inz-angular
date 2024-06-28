import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {JsonPipe, NgForOf} from "@angular/common";
import {InputRadioComponent} from "../shared/input-radio/input-radio.component";
import { Subject, takeUntil} from "rxjs";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TestState} from "../../models/test-state";
import {QuestionComponent} from "./question/question.component";
import {ButtonGreenComponent} from "../shared/button-green/button-green.component";
import {InputRadioChangeEvent} from "../../models/input-radio-change-event";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    InputRadioComponent,
    ReactiveFormsModule,
    NgForOf,
    QuestionComponent,
    ButtonGreenComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
  ) {}

  test: TestState = {
      question_arr: [],
      id_question_arr: []
  };
  form!: FormGroup<any>;

  initForm() {
    this.test.question_arr.forEach(question => {

    })
  }

  onQuestionValueChange(event: InputRadioChangeEvent) {
    this.form.get(event.name)?.setValue(event.value);
  }

  submitForm() {
    console.log('submitForm', this.form.value.test)
  }

  ngOnInit() {
    this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))
      .subscribe(test => {
          this.test = test;
        }
      );

    this.form = new FormGroup<any>({
      sdf: new FormControl<any>('empty', [Validators.required]),
      sadfasdf: new FormControl<any>('empty', [Validators.required]),
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
