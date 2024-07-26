import { Component } from '@angular/core';
import {ConspectElementComponent} from "./conspect-element/conspect-element.component";
import {ButtonAddQuestionComponent} from "../../shared/buttons/button-add-question/button-add-question.component";

@Component({
  selector: 'app-conspect',
  standalone: true,
  imports: [
    ConspectElementComponent,
    ButtonAddQuestionComponent
  ],
  templateUrl: './conspect.component.html',
  styleUrl: './conspect.component.css'
})
export class ConspectComponent {

}
