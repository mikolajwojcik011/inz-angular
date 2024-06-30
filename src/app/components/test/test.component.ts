import {Component, OnDestroy, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {TestState} from "../../models/test-state";
import {InputRadioChangeEvent} from "../../models/input-radio-change-event";
import {ButtonGreenComponent} from "../shared/button-green/button-green.component";
import {InputRadioComponent} from "../shared/input-radio/input-radio.component";
import {QuestionComponent} from "./question/question.component";

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
  ) {
    this.form = new FormGroup<any>({});
  }

  test: TestState = {
      question_arr: [],
      id_question_arr: []
  };
  form!: FormGroup<any>;

  initForm() {
    const group: any = {};

    this.test.question_arr.forEach(question => {
      group[question.id] = new FormControl<any>(null, [Validators.required]);
    })

    this.form = new FormGroup<any>(group);
  }

  onQuestionValueChange(event: InputRadioChangeEvent) {
    this.form.get(event.name)?.setValue(event.value);
  }

  submitForm() {
    console.log('submitForm', this.form.value)
  }

  ngOnInit() {
    this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))
      .subscribe(test => {
          this.test = test;
          if (this.test.question_arr.length > 0) this.initForm();
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
