import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../models/question";
import {InputRadioComponent} from "../../shared/input-radio/input-radio.component";
import {NgForOf, NgIf} from "@angular/common";
import {InputRadioChangeEvent} from "../../../models/input-radio-change-event";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    InputRadioComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: Question | undefined;
  @Output() valueChange = new EventEmitter<InputRadioChangeEvent>();

  onValueChange(value: any) {
    this.valueChange.emit(value);
  }
}
