import { Component } from '@angular/core';
import {ConspectElementComponent} from "../conspect/conspect-element/conspect-element.component";
import {ButtonWhiteComponent} from "../../shared/buttons/button-white/button-white.component";
import {ButtonAddQuestionComponent} from "../../shared/buttons/button-add-question/button-add-question.component";
import {QuestionIdTemplateComponent} from "../question-editor/question-id-template/question-id-template.component";

@Component({
  selector: 'app-examinee-identification',
  standalone: true,
  imports: [
    ConspectElementComponent,
    ButtonWhiteComponent,
    ButtonAddQuestionComponent,
    QuestionIdTemplateComponent
  ],
  templateUrl: './examinee-identification.component.html',
  styleUrl: './examinee-identification.component.css'
})
export class ExamineeIdentificationComponent {

}
