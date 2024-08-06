import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface CreateTestForm {
  basicProperties: FormGroup<{
    publicKey: FormControl<string | null>;
    privateKey: FormControl<string | null>;
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    duration: FormControl<string | null>;
    openDate: FormControl<string | null>;
    closeDate: FormControl<string | null>;
  }>;
  examineeIdentification: FormGroup<{
    name: FormControl<string | null>;
  }>;
  questions: FormGroup;
}

@Injectable({
  providedIn: 'root'
})
export class CreateTestFormControlService {

  createTestForm(): FormGroup<CreateTestForm> {
    return new FormGroup({
      basicProperties: new FormGroup({
        publicKey: new FormControl(''),
        privateKey: new FormControl(''),
        title: new FormControl(''),
        description: new FormControl(''),
        duration: new FormControl(''),
        openDate: new FormControl(''),
        closeDate: new FormControl(''),
      }),
      examineeIdentification: new FormGroup({
        name: new FormControl(''),
      }),
      questions: new FormGroup({})
    });
  }

  addExamineeIdentification(form: FormGroup<CreateTestForm>, name: string) {
    (form.controls.examineeIdentification as FormGroup).addControl('name', new FormControl(name));
  }
}
