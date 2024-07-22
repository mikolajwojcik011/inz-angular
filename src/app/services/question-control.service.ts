import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestState } from "../models/test-state";
import { Question } from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroupWithMap(questions: TestState): { formGroup: FormGroup, questionMap: Map<string, number> } {
    const formGroup = new FormGroup({});
    const questionMap = new Map<string, number>();

    questions.question_arr.forEach((question: Question, index: number) => {
      question.answers.forEach((answer) => {
        const controlName = `question_${question.id}_answer_${answer.id}`;
        formGroup.addControl(controlName, new FormControl(false)); // Assuming boolean for simplicity
      });
      questionMap.set(question.id, index);
    });

    return {
      formGroup: formGroup,
      questionMap: questionMap
    };
  }
}
