//Todo: Add multiple gaps inside word support
//Todo: Add feedback for user
//Todo: Improve guiding by adding conditions to progress

import { Component } from '@angular/core';
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
    CardHeaderGuideComponent
  ],
  templateUrl: './create-multiple-choice-template.component.html',
  styleUrl: './create-multiple-choice-template.component.css'
})
export class CreateMultipleChoiceTemplateComponent {

}
