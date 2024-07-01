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
      let answerArr = new FormArray<FormControl<string | null>>([]);
      question.answers.forEach((answer: Answer) => {
        answerArr.push(new FormControl<string | null>(answer.id));
      });
      group[question.id] = answerArr;
    });

    return this.formBuilder.group(group);
  }

}
