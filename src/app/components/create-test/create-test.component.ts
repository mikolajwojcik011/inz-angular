// todo: Add section to create telemetry questions
// todo: Add logic to save test creation progress inside local storage
// todo: Add option to select type of question
// todo: Add match question type
// todo: Add multiple choice question type
// todo: Add fill in the gaps inside paragraph question type
// todo: Add fill the gaps inside list of sentences question type
// todo: Add true or false question type
// todo: Add complex true or false question type

import { Component } from '@angular/core';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ConspectComponent} from "./conspect/conspect.component";
import {QuestionEditorComponent} from "./question-editor/question-editor.component";
import {BasicPropertiesComponent} from "./basic-properties/basic-properties.component";
import {ExamineeIdentificationComponent} from "./examinee-identification/examinee-identification.component";
import {ButtonAddQuestionComponent} from "../shared/buttons/button-add-question/button-add-question.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-create-test',
  standalone: true,
  imports: [
    TopBarComponent,
    ConspectComponent,
    QuestionEditorComponent,
    BasicPropertiesComponent,
    ExamineeIdentificationComponent,
    ButtonAddQuestionComponent,
    NgClass
  ],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.css'
})
export class CreateTestComponent {
  showConspect: boolean = true;
  show: string = 'ei';
  compact: boolean = true
  header: string = 'Basic Properties';
  description: string = 'Set the basic properties of the test, such as: public key, private key and title.';

  handleShowChange(newShowValue: string) {
    this.show = newShowValue;
    if (this.show === 'qe') {
      this.showConspect = true;
      this.header = 'Question Editor';
      this.description = 'Create and customize questions.';
    }

    if(this.show === 'ei'){
      this.showConspect = true;
      this.header = 'Examinee Identification';
      this.description = 'Choose the way the examinee will be identified, by creating a new question or by selecting an existing one.';
    }

    if (this.show === 'bp') {
      this.showConspect = false;
      this.header = 'Basic Properties';
      this.description = 'Set the basic properties of the test, such as: public key, private key and title.';
    }
  }
}
