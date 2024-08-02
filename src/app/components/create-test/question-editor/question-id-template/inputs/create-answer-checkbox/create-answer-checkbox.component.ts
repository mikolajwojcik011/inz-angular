import { Component } from '@angular/core';
import {
  InputTemplateTextComponent
} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {TextAreaTemplateComponent} from "../../../../../shared/inputs/text-area-template/text-area-template.component";
import {ButtonRemoveComponent} from "../../../../../shared/buttons/button-remove/button-remove.component";

@Component({
  selector: 'app-create-answer-checkbox',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    TextAreaTemplateComponent,
    ButtonRemoveComponent
  ],
  templateUrl: './create-answer-checkbox.component.html',
  styleUrl: './create-answer-checkbox.component.css'
})
export class CreateAnswerCheckboxComponent {

}
