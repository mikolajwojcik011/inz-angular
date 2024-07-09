import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {FormValueToProperPayloadService} from "../../../store/test/services/form-value-to-proper-payload.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {TestApiActions} from "../../../store/test/actions/test.actions";
import {SubmitTestApiPayload} from "../../../models/submit-test-api-payload";
import {InputTemplateCheckboxComponent} from "../../shared/input-template-checkbox/input-template-checkbox.component";
import {QuestionTemplateTestComponent} from "../../shared/question-template-test/question-template-test.component";

@Component({
  selector: 'app-dynamic-form-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    InputTemplateCheckboxComponent,
    QuestionTemplateTestComponent,
  ],
  templateUrl: './dynamic-form-test.component.html',
  styleUrl: './dynamic-form-test.component.css'
})
export class DynamicFormTestComponent implements OnChanges, OnInit {
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

  getInputClass(questionId: string ,answerId: string){
    let val = this.form.controls[questionId].value[answerId]
    return !!val;

  }

  onSubmit() {
    console.log(this.form.value);
    this.payLoad = this.fvtpp.formValueToProperPayload(this.form.value, this.publicKey);
    this.store.dispatch(TestApiActions.postTest({ payload: this.payLoad }));
  }

  ngOnInit() {
    console.log(this.form)
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
}