import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";
import {TestState} from "../../../models/test-state";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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

  constructor(
    private qcs: QuestionControlService
  ) {}

  getQuestionHead(questionKey: string){
    return this.questions.question_arr.find(q => q.id === questionKey)?.head
  }

  getAnswerLabel(questionKey: string, inx: number){
    return this.questions.question_arr.find(q => q.id === questionKey)?.answers[inx].content
  }

  getControls(questionId: string): AbstractControl[] {
    return (this.form.get(questionId) as FormArray).controls;
  }

  toggleCheckbox(questionKey: string, inx: number) {
    console.log(inx)
    const control = (this.form.get(questionKey) as FormArray).at(inx);
    if (control.value) {
      control.setValue(null);
    } else {
      control.setValue(inx);
    }
  }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  ngOnChanges() {
    if (this.questions.id_question_arr.length > 0) {
      this.form = this.qcs.toFormGroup(this.questions);
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value)
  }

  protected readonly Object = Object;
  protected readonly String = String;
}
