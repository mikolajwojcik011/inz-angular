import {Component, Input} from '@angular/core';
import {Answer} from "../../../../models/answer";
import {InputTemplateCheckboxComponent} from "../../inputs/input-template-checkbox/input-template-checkbox.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [
    InputTemplateCheckboxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.css'
})
export class MultipleChoiceComponent {
  @Input() answers: Answer[] = [];
  @Input() questionId: string = '';
  @Input() qformGroup: any;

  getInputClass(formControl: string){
    let val = this.qformGroup.controls[formControl].value
    return !!val;
  }
}

