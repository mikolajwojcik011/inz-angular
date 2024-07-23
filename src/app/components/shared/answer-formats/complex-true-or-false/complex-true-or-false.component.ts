//todo: Finish complex true or false component

import {Component, Input} from '@angular/core';
import {Answer} from "../../../../models/answer";
import {getVisibleIndexService} from "../../../../services/get-visible-index.service";
import {GetInputClassService} from "../../../../services/get-input-class.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTemplateCheckboxComponent} from "../../inputs/input-template-checkbox/input-template-checkbox.component";

@Component({
  selector: 'app-complex-true-or-false',
  standalone: true,
  imports: [
    FormsModule,
    InputTemplateCheckboxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './complex-true-or-false.component.html',
  styleUrl: './complex-true-or-false.component.css'
})
export class ComplexTrueOrFalseComponent {
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
