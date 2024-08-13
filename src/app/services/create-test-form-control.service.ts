import { Injectable } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import { generate } from "random-words";
import {Observable, of} from "rxjs";

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
  prevUid: string = '';
  createTestForm(): FormGroup<CreateTestForm> {

    const publicKey = generate({exactly: 2, minLength: 4, maxLength: 8, join: '-'});
    const privateKey = generate({exactly: 2, minLength: 4, maxLength: 8, join: '-'});
    return new FormGroup({
      basicProperties: new FormGroup({
        publicKey: new FormControl(publicKey),
        privateKey: new FormControl(privateKey),
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

  addQuestion(form: FormGroup<CreateTestForm>, questionUUID: string): Observable<void> {
    if (this.prevUid) {
      const firstChar = this.prevUid.charCodeAt(0);
      questionUUID = String.fromCharCode(firstChar + 1) + questionUUID.slice(1);
    }
    this.prevUid = questionUUID;
    const questionGroup = new FormGroup({
      uuid: new FormControl(questionUUID),
      type: new FormControl('multiple-choice'),
      listStyle: new FormControl('capital'),
      question: new FormControl(''),
      description: new FormControl(''),
      multimedia: new FormControl(false),
      multimediaType: new FormControl('image'),
      multimediaURL: new FormControl(''),
      answer: new FormArray([])
    });
    (form.controls.questions as FormGroup).addControl(questionUUID, questionGroup);
    return of();
  }

  removeQuestion(form: FormGroup<CreateTestForm>, questionUUID: string) {
    (form.controls.questions as FormGroup).removeControl(questionUUID);
    console.log('test')
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
