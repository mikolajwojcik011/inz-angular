import { Component } from '@angular/core';
import {InputTemplateTextComponent} from "../../shared/inputs/input-template-text/input-template-text.component";
import {TextAreaTemplateComponent} from "../../shared/inputs/text-area-template/text-area-template.component";
import {InputTemplateTimeComponent} from "../../shared/inputs/input-template-time/input-template-time.component";
import {InputTemplateDateComponent} from "../../shared/inputs/input-template-date/input-template-date.component";
import {OceCardComponent} from "../../shared/cards/oce-card/oce-card.component";
import {OceCardContentComponent} from "../../shared/cards/oce-card-content/oce-card-content.component";

@Component({
  selector: 'app-basic-properties',
  standalone: true,
  imports: [
    InputTemplateTextComponent,
    TextAreaTemplateComponent,
    InputTemplateTimeComponent,
    InputTemplateDateComponent,
    OceCardComponent,
    OceCardContentComponent
  ],
  templateUrl: './basic-properties.component.html',
  styleUrl: './basic-properties.component.css'
})
export class BasicPropertiesComponent {

}
