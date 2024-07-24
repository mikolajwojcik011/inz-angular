// todo: Add section to create telemetry questions
// todo: Add logic to save test creation progress inside local storage
// todo: Add option to select test title and description
// todo: Add option to select test duration
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

@Component({
  selector: 'app-create-test',
  standalone: true,
  imports: [
    TopBarComponent,
    ConspectComponent,
    QuestionEditorComponent
  ],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.css'
})
export class CreateTestComponent {

}
