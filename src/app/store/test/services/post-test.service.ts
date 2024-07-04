import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubmitTestApiPayload} from "../../../models/submit-test-api-payload";

@Injectable({
  providedIn: 'root'
})
export class PostTestService {

  constructor(
    private http: HttpClient
  ) { }

  postTest(payload: SubmitTestApiPayload) {
    return this.http.post('http://57.128.200.162:5000/submit-test', payload);
  }
}
