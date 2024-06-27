import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {GetTestApiResponse} from "../../models/get-test-api-response";
import {JsonPipe} from "@angular/common";
import {InputRadioComponent} from "../shared/input-radio/input-radio.component";
import {Subject, takeUntil} from "rxjs";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    InputRadioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
  ) {}

  test: GetTestApiResponse | null = null;
  form!: FormGroup<any>;

  ngOnInit() {
    this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))
      .subscribe(test => {
        this.test = test;
    });

    this.form = new FormGroup<any>({
      test: new FormControl<any>('empty', [Validators.required]),
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm() {
    console.log(this.form.value.test);
  }
}
