//Todo: Add multiple gaps inside word support
//Todo: Add feedback for user
//Todo: Improve guiding by adding conditions to progress

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputTemplateTextComponent} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {CreateAnswerCheckboxComponent} from "../../inputs/create-answer-checkbox/create-answer-checkbox.component";
import {ButtonPlusComponent} from "../../../../../shared/buttons/button-plus/button-plus.component";
import {
  ButtonAddQuestionComponent
} from "../../../../../shared/buttons/button-add-question/button-add-question.component";
import {ButtonRemoveComponent} from "../../../../../shared/buttons/button-remove/button-remove.component";
import {TextAreaTemplateComponent} from "../../../../../shared/inputs/text-area-template/text-area-template.component";
import {FormFieldComponent} from "../../../../../shared/form-fields/form-field/form-field.component";
import {LabelComponent} from "../../../../../shared/form-fields/label/label.component";
import {CardComponent} from "../../../../../shared/cards/card/card.component";
import {CardContentComponent} from "../../../../../shared/cards/card-content/card-content.component";
import {CardHeaderGuideComponent} from "../../../../../shared/cards/card-header-guide/card-header-guide.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, KeyValuePipe} from "@angular/common";
import {TileComponent} from "../../../../../shared/form-fields/tile/tile.component";
import {FocusActiveDirective} from "../../../../../../directives/form-field-input.directive";
import {ButtonMarkTrueComponent} from "../../../../../shared/buttons/button-mark-true/button-mark-true.component";
import {ButtonMarkFalseComponent} from "../../../../../shared/buttons/button-mark-false/button-mark-false.component";
import {FiledErrorComponent} from "../../../../../shared/form-fields/filed-error/filed-error.component";

@Component({
  selector: 'app-create-multiple-choice-template',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    CreateAnswerCheckboxComponent,
    ButtonPlusComponent,
    ButtonAddQuestionComponent,
    ButtonRemoveComponent,
    TextAreaTemplateComponent,
    FormFieldComponent,
    LabelComponent,
    CardComponent,
    CardContentComponent,
    CardHeaderGuideComponent,
    ReactiveFormsModule,
    KeyValuePipe,
    JsonPipe,
    FormsModule,
    TileComponent,
    FocusActiveDirective,
    ButtonMarkTrueComponent,
    ButtonMarkFalseComponent,
    FiledErrorComponent
  ],
  templateUrl: './create-multiple-choice-template.component.html',
  styleUrl: './create-multiple-choice-template.component.css'
})
export class CreateMultipleChoiceTemplateComponent {
  @Input() iFormGroup: any;
  @Input() listStyle: string = 'number';
  @Output() addAnswer: EventEmitter<string> = new EventEmitter()
  @Output() setCorrect: EventEmitter<{value: boolean, answerIndex: number}> = new EventEmitter()
  @Output() removeAnswer: EventEmitter<number> = new EventEmitter()
  textareaValue: string = '';
  error: boolean = false;

  onTextareaChange() {
    if (this.textareaValue !== '') {
      this.error = false;
    }
  }

  addAnswerHandler(){
    if (this.textareaValue === '') {
      this.error = true;
      return;
    }
    this.addAnswer.emit(this.textareaValue);
  }

  setCorrectHandler(value: boolean, answerIndex: number){
    this.setCorrect.emit({value: value, answerIndex: answerIndex});
  }

  removeAnswerHandler(answerIndex: number){
    this.removeAnswer.emit(answerIndex);
  }

}
