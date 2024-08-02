import { Component } from '@angular/core';
import {
  InputTemplateCheckboxComponent
} from "../../../../../shared/inputs/input-template-checkbox/input-template-checkbox.component";
import {
  InputTemplateTextComponent
} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {ProgressionComponent} from "../../../../top-bar/progression/progression.component";

@Component({
  selector: 'app-create-true-or-false-complex-template',
  standalone: true,
  imports: [
    InputTemplateCheckboxComponent,
    InputTemplateTextComponent,
    ProgressionComponent
  ],
  templateUrl: './create-true-or-false-complex-template.component.html',
  styleUrl: './create-true-or-false-complex-template.component.css'
})
export class CreateTrueOrFalseComplexTemplateComponent {

}
