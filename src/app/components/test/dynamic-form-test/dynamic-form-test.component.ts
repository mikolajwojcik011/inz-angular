import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('questionsContainer') questionContainer: ElementRef | undefined;
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

  navigateToQuestion(id: string) {
    const selector = `#q-${id}`;
    const questionElement = this.questionContainer?.nativeElement.querySelector(selector);
    if (questionElement) {
      questionElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  getInputClass(questionId: string ,answerId: string){
    let val = this.form.controls[questionId].value[answerId]
    return !!val;

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
