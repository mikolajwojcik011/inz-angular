import { Injectable } from '@angular/core';
import {TestState} from "../../../models/test-state";
import {Question} from "../../../models/question";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Answer} from "../../../models/answer";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor(
    private formBuilder: FormBuilder
  ) {}

  toFormGroup(questions: TestState): FormGroup {
    let group: any = {};

    questions.question_arr.forEach((question: Question) => {
      let answerGroup: { [key: string]: FormControl } = {};
      question.answers.forEach((answer: Answer) => {
        answerGroup[answer.id] = new FormControl(false);
      });
      group[question.id] = new FormGroup(answerGroup);
    });
    return this.formBuilder.group(group);
  }
}
