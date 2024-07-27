import { Component } from '@angular/core';
import {ButtonAddQuestionComponent} from "../../../shared/buttons/button-add-question/button-add-question.component";
import {InputTemplateTextComponent} from "../../../shared/inputs/input-template-text/input-template-text.component";
import {SelectTemplateComponent} from "../../../shared/inputs/select-template/select-template.component";
import {TextAreaTemplateComponent} from "../../../shared/inputs/text-area-template/text-area-template.component";

@Component({
  selector: 'app-question-id-template',
  standalone: true,
  imports: [
    ButtonAddQuestionComponent,
    InputTemplateTextComponent,
    SelectTemplateComponent,
    TextAreaTemplateComponent
  ],
  templateUrl: './question-id-template.component.html',
  styleUrl: './question-id-template.component.css'
})
export class QuestionIdTemplateComponent {

}
