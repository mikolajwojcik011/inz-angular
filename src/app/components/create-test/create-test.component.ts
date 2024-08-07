// todo: Add section to create telemetry questions
// todo: Add logic to save test creation progress inside local storage
// todo: Add match question type
// todo: Add fill the gaps inside list of sentences question type
// todo: Add true or false question type
// todo: Add complex true or false question type

import {Component, OnInit} from '@angular/core';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ConspectComponent} from "./conspect/conspect.component";
import {QuestionEditorComponent} from "./question-editor/question-editor.component";
import {BasicPropertiesComponent} from "./basic-properties/basic-properties.component";
import {ExamineeIdentificationComponent} from "./examinee-identification/examinee-identification.component";
import {ButtonAddQuestionComponent} from "../shared/buttons/button-add-question/button-add-question.component";
import {JsonPipe, KeyValuePipe, NgClass, NgIf} from "@angular/common";
import {QuestionTemplateComponent} from "./question-editor/question-id-template/question-template.component";
import {CardComponent} from "../shared/cards/card/card.component";
import {CardContentComponent} from "../shared/cards/card-content/card-content.component";
import {CardHeaderSimpleComponent} from "../shared/cards/card-header-simple/card-header-simple.component";
import {
  CreateTestForm,
  CreateTestFormControlService,
  QuestionInterface
} from "../../services/create-test-form-control.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ConspectElementComponent} from "./conspect/conspect-element/conspect-element.component";
import * as uuid from 'uuid';

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
    NgClass,
    CardComponent,
    CardContentComponent,
    CardHeaderSimpleComponent,
    QuestionTemplateComponent,
    NgIf,
    KeyValuePipe,
    ConspectElementComponent,
    JsonPipe
  ],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.css'
})
export class CreateTestComponent implements OnInit{
  showConspect: boolean = true;
  show: string = 'qe';
  compact: boolean = true;
  header: string = 'Basic Properties';
  description: string = 'Set the basic properties of the test, such as: public key, private key and title.';
  createTestForm: FormGroup<CreateTestForm> = new FormGroup({
    basicProperties: new FormGroup({
      publicKey: new FormControl(''),
      privateKey: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      duration: new FormControl(''),
      noDuration: new FormControl(false),
      openDate: new FormControl(''),
      closeDate: new FormControl(''),
      noDate: new FormControl(false),
    }),
    examineeIdentification: new FormGroup({}),
    questions: new FormGroup({})
  });

  constructor(
   private ctfcs: CreateTestFormControlService,
  ) {}

  handleShowChange(newShowValue: string) {
    this.show = newShowValue;
    if (this.show === 'qe') {
      this.showConspect = true;
      this.header = 'Question Editor';
      this.description = 'Create and customize questions.';
    }

    if(this.show === 'ei'){
      this.showConspect = false;
      this.header = 'Examinee Identification';
      this.description = 'Choose the way the examinee will be identified, by creating a new question or by selecting an existing one.';
    }

    if (this.show === 'bp') {
      this.showConspect = false;
      this.header = 'Basic Properties';
      this.description = 'Set the basic properties of the test, such as: public key, private key and title.';
    }
  }

  ngOnInit() {
    this.createTestForm = this.ctfcs.createTestForm();
  }

  logForm() {
    console.log(this.createTestForm.controls.questions.value);
  }

  handleAddQuestion() {
    this.ctfcs.addQuestion(this.createTestForm, uuid.v4());
  }
}
