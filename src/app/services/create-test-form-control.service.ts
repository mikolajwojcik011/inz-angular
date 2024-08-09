import { Injectable } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

export interface CreateTestForm {
  basicProperties: FormGroup<{
    publicKey: FormControl<string | null>;
    privateKey: FormControl<string | null>;
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    duration: FormControl<string | null>;
    noDuration: FormControl<boolean | null>;
    openDate: FormControl<string | null>;
    closeDate: FormControl<string | null>;
    noDate: FormControl<boolean | null>;
  }>;
  examineeIdentification: FormGroup<{}>;
  questions: FormGroup<{ [key: string]: FormGroup<QuestionInterface> }>;
}

export interface QuestionInterface {
  uuid: FormControl<string>;
  type: FormControl<string>;
  listStyle: FormControl<string>;
  question: FormControl<string>;
  description: FormControl<string | null>;
  multimedia: FormControl<boolean>;
  multimediaType: FormControl<string | null>;
  multimediaURL: FormControl<string | null>;
  answer: FormArray;
}

@Injectable({
  providedIn: 'root'
})
export class CreateTestFormControlService {

  constructor() {
  }

  createTestForm(): FormGroup<CreateTestForm> {
    return new FormGroup({
      basicProperties: new FormGroup({
        publicKey: new FormControl(''),
        privateKey: new FormControl(''),
        title: new FormControl(''),
        description: new FormControl(''),
        duration: new FormControl(''),
        noDuration: new FormControl(false),
        openDate: new FormControl(''),
        closeDate: new FormControl(''),
        noDate: new FormControl(false),
      }),
      examineeIdentification: new FormGroup({}),
      questions: new FormGroup<{ [key: string]: FormGroup<QuestionInterface> }>({})
    });
  }

  addExamineeIdentification(form: FormGroup<CreateTestForm>, name: string) {
    (form.controls.examineeIdentification as FormGroup).addControl('name', new FormControl(name));
  }

  addQuestion(form: FormGroup<CreateTestForm>, questionUUID: string) {
    const questionGroup = new FormGroup({
      uuid: new FormControl(questionUUID),
      type: new FormControl('multiple-choice'),
      listStyle: new FormControl('capital'),
      question: new FormControl(''),
      description: new FormControl(''),
      multimedia: new FormControl(false),
      multimediaType: new FormControl(''),
      multimediaURL: new FormControl(''),
      answer: new FormArray([])
    });
    (form.controls.questions as FormGroup).addControl(questionUUID, questionGroup);
  }

  addAnswer(form: FormGroup<CreateTestForm>, questionUUID: string, value:string) {
    (form.controls.questions.controls[questionUUID] as FormGroup<QuestionInterface>).controls.answer
      .push(new FormGroup({
        answer: new FormControl(value),
        correct: new FormControl(false)
      }
    ));
  }

  setCorrect(form: FormGroup<CreateTestForm>, questionUUID: string, answerIndex: number, value: boolean) {
    (form.controls.questions.controls[questionUUID] as FormGroup<QuestionInterface>).controls.answer.controls[answerIndex].value['correct'] = value;
  }

  removeAnswer(form: FormGroup<CreateTestForm>, questionUUID: string, answerIndex: number) {
    (form.controls.questions.controls[questionUUID] as FormGroup<QuestionInterface>).controls.answer.removeAt(answerIndex);
  }
}
