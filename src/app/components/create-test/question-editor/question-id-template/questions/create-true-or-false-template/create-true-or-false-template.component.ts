import { Component } from '@angular/core';
import {
  InputTemplateCheckboxComponent
} from "../../../../../shared/inputs/input-template-checkbox/input-template-checkbox.component";

@Component({
  selector: 'app-create-true-or-false-template',
  standalone: true,
  imports: [
    InputTemplateCheckboxComponent
  ],
  templateUrl: './create-true-or-false-template.component.html',
  styleUrl: './create-true-or-false-template.component.css'
})
export class CreateTrueOrFalseTemplateComponent {

}
