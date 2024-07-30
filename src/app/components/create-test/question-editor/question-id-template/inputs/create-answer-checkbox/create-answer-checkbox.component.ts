import { Component } from '@angular/core';
import {
  InputTemplateTextComponent
} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {TextAreaTemplateComponent} from "../../../../../shared/inputs/text-area-template/text-area-template.component";

@Component({
  selector: 'app-create-answer-checkbox',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    TextAreaTemplateComponent
  ],
  templateUrl: './create-answer-checkbox.component.html',
  styleUrl: './create-answer-checkbox.component.css'
})
export class CreateAnswerCheckboxComponent {

}
