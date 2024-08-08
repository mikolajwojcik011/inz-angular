import {Component, Input, OnInit} from '@angular/core';
import {ButtonAddQuestionComponent} from "../../../shared/buttons/button-add-question/button-add-question.component";
import {InputTemplateTextComponent} from "../../../shared/inputs/input-template-text/input-template-text.component";
import {SelectTemplateComponent} from "../../../shared/inputs/select-template/select-template.component";
import {TextAreaTemplateComponent} from "../../../shared/inputs/text-area-template/text-area-template.component";
import {InputTemplateFileComponent} from "../../../shared/inputs/input-template-file/input-template-file.component";
import {
  CreateMultipleChoiceTemplateComponent
} from "./questions/create-multiple-choice-template/create-multiple-choice-template.component";
import {ButtonRemoveComponent} from "../../../shared/buttons/button-remove/button-remove.component";
import {ButtonCopyComponent} from "../../../shared/buttons/button-copy/button-copy.component";
import {ButtonUpComponent} from "../../../shared/buttons/button-up/button-up.component";
import {ButtonDownComponent} from "../../../shared/buttons/button-down/button-down.component";
import {CreateFillTheGapsComponent} from "./questions/create-fill-the-gaps-template/create-fill-the-gaps.component";
import {
  CreateTrueOrFalseTemplateComponent
} from "./questions/create-true-or-false-template/create-true-or-false-template.component";
import {
  CardHeaderComplexComponent
} from "../../../shared/cards/card-header-complex/card-header-complex.component";
import {CardComponent} from "../../../shared/cards/card/card.component";
import {CardContentComponent} from "../../../shared/cards/card-content/card-content.component";
import {FormFieldComponent} from "../../../shared/form-fields/form-field/form-field.component";
import {FocusActiveDirective} from "../../../../directives/form-field-input.directive";
import {LabelComponent} from "../../../shared/form-fields/label/label.component";
import {CheckboxSimpleComponent} from "../../../shared/form-fields/checkbox-simple/checkbox-simple.component";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SelectElementComponent} from "../../../shared/inputs/select-template/select-element/select-element.component";
import {QuestionInterface} from "../../../../services/create-test-form-control.service";

@Component({
  selector: 'oce-question-template',
  standalone: true,
  imports: [
    ButtonAddQuestionComponent,
    InputTemplateTextComponent,
    SelectTemplateComponent,
    TextAreaTemplateComponent,
    InputTemplateFileComponent,
    CreateMultipleChoiceTemplateComponent,
    ButtonRemoveComponent,
    ButtonCopyComponent,
    ButtonUpComponent,
    ButtonDownComponent,
    CreateFillTheGapsComponent,
    CreateTrueOrFalseTemplateComponent,
    CardHeaderComplexComponent,
    CardComponent,
    CardContentComponent,
    FormFieldComponent,
    FocusActiveDirective,
    LabelComponent,
    CheckboxSimpleComponent,
    ReactiveFormsModule,
    SelectElementComponent
  ],
  templateUrl: './question-template.component.html',
  styleUrl: './question-template.component.css'
})
export class QuestionTemplateComponent implements OnInit{
  questionType: string = 'multiple-choice';
  @Input() iFormGroup: FormGroup = new FormGroup<{ [key: string]: FormGroup<QuestionInterface> }>({})
  @Input() iIndex: number = 0;
  @Input() uuid: string = '';

  showUploadFile() {
    console.log(this.iFormGroup.controls['answer'].value);
  }

  ngOnInit() {
    if (!this.iFormGroup) {
      this.iFormGroup = new FormGroup({});
    }
  }
}
