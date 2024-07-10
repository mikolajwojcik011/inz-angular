import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";
import {NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
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
  @Output() formChange = new EventEmitter<any>();
  form!: FormGroup;
  publicKey: string | null = null;

  constructor(
    private qcs: QuestionControlService,
    private route: ActivatedRoute,
  ) {}

  navigateToQuestion(id: string) {
    const selector = `#q-${id}`;
    const questionElement = this.questionContainer?.nativeElement.querySelector(selector);
    if (questionElement) {
      questionElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  private subscribeToFormChanges(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control) {
        if (control instanceof FormGroup) {
          // Recursively subscribe to changes in nested FormGroup
          this.subscribeToFormChanges(control);
        } else {
          // Subscribe to changes in FormControl
          control.valueChanges.subscribe(() => {
            console.log(this.form.value); // For debugging
            this.formChange.emit(this.form.value); // Emit form value on change
          });
        }
      }
    });
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
      this.subscribeToFormChanges(this.form);
    }
  }
}
