import { Component } from '@angular/core';
import {ButtonAddQuestionComponent} from "../../../shared/buttons/button-add-question/button-add-question.component";

@Component({
  selector: 'app-question-id-template',
  standalone: true,
  imports: [
    ButtonAddQuestionComponent
  ],
  templateUrl: './question-id-template.component.html',
  styleUrl: './question-id-template.component.css'
})
export class QuestionIdTemplateComponent {

}
