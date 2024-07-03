import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {FormValueToProperPayloadService} from "../../../store/test/services/form-value-to-proper-payload.service";
import {ActivatedRoute} from "@angular/router";

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
  payLoad = '';
  publicKey: string | null = null;

  constructor(
    private qcs: QuestionControlService,
    private fvtp: FormValueToProperPayloadService,
    private route: ActivatedRoute,
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
    console.log('Payload:', this.fvtp.formValueToProperPayload(this.form.value, this.publicKey));
  }
}
