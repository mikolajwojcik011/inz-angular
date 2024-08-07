import { Component } from '@angular/core';
import {ConspectElementComponent} from "../conspect/conspect-element/conspect-element.component";
import {ButtonWhiteComponent} from "../../shared/buttons/button-white/button-white.component";
import {ButtonAddQuestionComponent} from "../../shared/buttons/button-add-question/button-add-question.component";
import {QuestionTemplateComponent} from "../question-editor/question-id-template/question-template.component";
import {
  InputTemplateCheckboxComponent
} from "../../shared/inputs/input-template-checkbox/input-template-checkbox.component";
import {InputTemplateTileComponent} from "../../shared/inputs/input-template-tile/input-template-tile.component";
import {InputTemplateTextComponent} from "../../shared/inputs/input-template-text/input-template-text.component";
import {ButtonPlusComponent} from "../../shared/buttons/button-plus/button-plus.component";
import {FocusActiveDirective} from "../../../directives/form-field-input.directive";
import {FormFieldComponent} from "../../shared/form-fields/form-field/form-field.component";
import {LabelComponent} from "../../shared/form-fields/label/label.component";

@Component({
  selector: 'app-examinee-identification',
  standalone: true,
  imports: [
    ConspectElementComponent,
    ButtonWhiteComponent,
    ButtonAddQuestionComponent,
    QuestionTemplateComponent,
    InputTemplateCheckboxComponent,
    InputTemplateTileComponent,
    InputTemplateTextComponent,
    ButtonPlusComponent,
    FocusActiveDirective,
    FormFieldComponent,
    LabelComponent
  ],
  templateUrl: './examinee-identification.component.html',
  styleUrl: './examinee-identification.component.css'
})
export class ExamineeIdentificationComponent {

}
