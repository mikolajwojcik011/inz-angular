import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {InputTemplateTextComponent} from "../../shared/inputs/input-template-text/input-template-text.component";
import {TextAreaTemplateComponent} from "../../shared/inputs/text-area-template/text-area-template.component";
import {InputTemplateTimeComponent} from "../../shared/inputs/input-template-time/input-template-time.component";
import {InputTemplateDateComponent} from "../../shared/inputs/input-template-date/input-template-date.component";
import {CardComponent} from "../../shared/cards/card/card.component";
import {CardContentComponent} from "../../shared/cards/card-content/card-content.component";
import {FormFieldComponent} from "../../shared/form-fields/form-field/form-field.component";
import {LabelComponent} from "../../shared/form-fields/label/label.component";
import {FocusActiveDirective} from "../../../directives/form-field-input.directive";
import {CheckboxSimpleComponent} from "../../shared/form-fields/checkbox-simple/checkbox-simple.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-basic-properties',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    TextAreaTemplateComponent,
    InputTemplateTimeComponent,
    InputTemplateDateComponent,
    CardComponent,
    CardContentComponent,
    FormFieldComponent,
    LabelComponent,
    FocusActiveDirective,
    CheckboxSimpleComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './basic-properties.component.html',
  styleUrl: './basic-properties.component.css'
})
export class BasicPropertiesComponent implements OnInit{
  @Input() iFormGroup: any = null;
  group: any = null;

  ngOnInit() {
    this.group = this.iFormGroup;
  }
}
