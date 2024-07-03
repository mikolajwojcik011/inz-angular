import { Injectable } from '@angular/core';
import {SubmitTestApiPayload} from "../../../models/submit-test-api-payload";

@Injectable({
  providedIn: 'root'
})
export class FormValueToProperPayloadService {

  constructor() { }

  formValueToProperPayload(formValue: any, publicKey: string | null): any {
    let payload: SubmitTestApiPayload = {
      public_key: publicKey,
      answer_arr: {},
    };

    for (let key in formValue) {
      payload.answer_arr[key] = [];
      for (let answer in formValue[key]) {
        if (formValue[key][answer] === true) {
          payload.answer_arr[key].push(answer);
        }
      }
    }
    return payload;
  }
}
