import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {GetTestApiResponse} from "../../models/get-test-api-response";
import {JsonPipe} from "@angular/common";
import {InputRadioComponent} from "../shared/input-radio/input-radio.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    InputRadioComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  test: GetTestApiResponse | null = null;

  constructor(
    private store: Store,
  ) {}


  ngOnInit() {
    this.store.select(selectTest).subscribe(test => {
      this.test = test;
      console.log(this.test);
    });
  }
}
