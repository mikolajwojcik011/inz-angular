import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./services/question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {InputTemplateCheckboxComponent} from "../../shared/input-template-checkbox/input-template-checkbox.component";
import {QuestionTemplateTestComponent} from "../../shared/question-template-test/question-template-test.component";
import {FormSubscriptionService} from "./services/form-subscription.service";
import {Subject, Subscription} from "rxjs";

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
export class DynamicFormTestComponent implements OnChanges, OnInit, OnDestroy {
  @ViewChild('questionsContainer') questionContainer: ElementRef | undefined;
  @Input() questions: TestState = {
      question_arr: [],
      id_question_arr: []
  };
  @Output() formChange = new EventEmitter<any>();
  form!: FormGroup;
  publicKey: string | null = null;
  private formChangeSubscription: Subscription|null= null
  private destroy$ = new Subject<void>();

  constructor(
    private qcs: QuestionControlService,
    private route: ActivatedRoute,
    private formSubscriptionService: FormSubscriptionService,
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
    this.form = new FormGroup({});

    this.route.paramMap.subscribe(params => {
      this.publicKey = params.get('public_key');
    });
  }

  ngOnChanges() {
    if (this.questions.id_question_arr.length > 0) {
      this.form = this.qcs.toFormGroup(this.questions);
      this.formChangeSubscription = this.formSubscriptionService.subscribeToFormChanges(this.form, this.formChange, this.destroy$);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
