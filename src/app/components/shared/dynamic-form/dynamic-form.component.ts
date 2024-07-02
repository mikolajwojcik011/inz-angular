import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input() questions: TestState = {
      question_arr: [],
      id_question_arr: []
  };
  form!: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({});
  }

  ngOnChanges() {
    if (this.questions.id_question_arr.length > 0) {
      this.form = this.qcs.toFormGroup(this.questions);
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value)
    for (let key in this.form.value) {
      for (let answer in this.form.value[key]) {
        console.log('Question:', key, 'Answer:', answer);
      }
    }
  }
}
