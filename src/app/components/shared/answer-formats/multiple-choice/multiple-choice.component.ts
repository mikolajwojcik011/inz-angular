import {Component, Input} from '@angular/core';
import {Answer} from "../../../../models/answer";
import {InputTemplateCheckboxComponent} from "../../inputs/input-template-checkbox/input-template-checkbox.component";
import {ReactiveFormsModule} from "@angular/forms";
import {getVisibleIndexService} from "../../../../services/get-visible-index.service";
import {GetInputClassService} from "../../../../services/get-input-class.service";

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
  public gvi: getVisibleIndexService;
  public gic: GetInputClassService;

  constructor(
    gvi: getVisibleIndexService,
    gic: GetInputClassService
  ) {
    this.gic = gic;
    this.gvi = gvi;
  }
}

