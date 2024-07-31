import { Component } from '@angular/core';
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

@Component({
  selector: 'app-question-id-template',
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
    CreateFillTheGapsComponent
  ],
  templateUrl: './question-id-template.component.html',
  styleUrl: './question-id-template.component.css'
})
export class QuestionIdTemplateComponent {
  showUpload = false;
  questionType: string = 'fill-the-gaps';

  showUploadFile() {
    this.showUpload = !this.showUpload;
  }
}
