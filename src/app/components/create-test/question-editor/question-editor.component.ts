import { Component } from '@angular/core';
import {QuestionTemplateComponent} from "./question-id-template/question-template.component";

@Component({
  selector: 'app-question-editor',
  standalone: true,
  imports: [
    QuestionTemplateComponent
  ],
  templateUrl: './question-editor.component.html',
  styleUrl: './question-editor.component.css'
})
export class QuestionEditorComponent {

}
