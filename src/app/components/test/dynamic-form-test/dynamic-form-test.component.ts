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
import {QuestionControlService} from "../../../services/question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {InputTemplateCheckboxComponent} from "../../shared/inputs/input-template-checkbox/input-template-checkbox.component";
import {QuestionTemplateTestComponent} from "../../shared/questions/question-template-test/question-template-test.component";
import {FormSubscriptionService} from "../../../services/form-subscription.service";
import {Subject, Subscription} from "rxjs";
import {
  MatchComponent
} from "../../shared/answer-formats/match/match.component";
import {MultipleChoiceComponent} from "../../shared/answer-formats/multiple-choice/multiple-choice.component";
import {SimpleTrueOrFalseComponent} from "../../shared/answer-formats/simple-true-or-false/simple-true-or-false.component";

@Component({
  selector: 'app-dynamic-form-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    InputTemplateCheckboxComponent,
    QuestionTemplateTestComponent,
    MatchComponent,
    SimpleTrueOrFalseComponent,
    MultipleChoiceComponent,
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

  ngOnInit() {
    this.form = new FormGroup({});

    this.route.paramMap.subscribe(params => {
      this.publicKey = params.get('public_key');
    });
  }

  ngOnChanges() {
    if (this.questions.id_question_arr.length > 0) {
      this.form = this.qcs.toFormGroupWithMap(this.questions).formGroup;
      this.formChangeSubscription = this.formSubscriptionService.subscribeToFormChanges(this.form, this.formChange, this.destroy$);
      console.log(this.form)
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
