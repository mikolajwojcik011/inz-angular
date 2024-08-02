import { Component } from '@angular/core';
import {QuestionIdTemplateComponent} from "./question-id-template/question-id-template.component";

@Component({
  selector: 'app-question-editor',
  standalone: true,
  imports: [
    QuestionIdTemplateComponent
  ],
  templateUrl: './question-editor.component.html',
  styleUrl: './question-editor.component.css'
})
export class QuestionEditorComponent {

}
