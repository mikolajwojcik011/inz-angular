import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {FormValueToProperPayloadService} from "../../../store/test/services/form-value-to-proper-payload.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {TestApiActions} from "../../../store/test/test.actions";
import {SubmitTestApiPayload} from "../../../models/submit-test-api-payload";

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
  payLoad: SubmitTestApiPayload = {
    public_key: '',
    answer_arr: {}
  };
  publicKey: string | null = null;

  constructor(
    private qcs: QuestionControlService,
    private fvtpp: FormValueToProperPayloadService,
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({});

    this.route.paramMap.subscribe(params => {
      this.publicKey = params.get('public_key');
    })
  }

  ngOnChanges() {
    if (this.questions.id_question_arr.length > 0) {
      this.form = this.qcs.toFormGroup(this.questions);
    }
  }

  onSubmit() {
    console.log(this.form.value);
    this.payLoad = this.fvtpp.formValueToProperPayload(this.form.value, this.publicKey);
    this.store.dispatch(TestApiActions.postTest({ payload: this.payLoad }));
  }
}
