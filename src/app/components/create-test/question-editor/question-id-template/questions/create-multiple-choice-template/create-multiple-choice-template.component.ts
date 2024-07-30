import { Component } from '@angular/core';
import {InputTemplateTextComponent} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {CreateAnswerCheckboxComponent} from "../../inputs/create-answer-checkbox/create-answer-checkbox.component";
import {ButtonPlusComponent} from "../../../../../shared/buttons/button-plus/button-plus.component";
import {
  ButtonAddQuestionComponent
} from "../../../../../shared/buttons/button-add-question/button-add-question.component";

@Component({
  selector: 'app-create-multiple-choice-template',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    CreateAnswerCheckboxComponent,
    ButtonPlusComponent,
    ButtonAddQuestionComponent
  ],
  templateUrl: './create-multiple-choice-template.component.html',
  styleUrl: './create-multiple-choice-template.component.css'
})
export class CreateMultipleChoiceTemplateComponent {

}
