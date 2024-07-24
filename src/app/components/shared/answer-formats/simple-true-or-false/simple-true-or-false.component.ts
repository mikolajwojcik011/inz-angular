import {Component, Input} from '@angular/core';
import {Answer} from "../../../../models/answer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTemplateCheckboxComponent} from "../../inputs/input-template-checkbox/input-template-checkbox.component";

@Component({
  selector: 'app-simple-true-or-false',
  standalone: true,
  imports: [
    FormsModule,
    InputTemplateCheckboxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './simple-true-or-false.component.html',
  styleUrl: './simple-true-or-false.component.css'
})
export class SimpleTrueOrFalseComponent {
  @Input() answers: Answer[] = [];
  @Input() questionId: string = '';
  @Input() qformGroup: any;
}
