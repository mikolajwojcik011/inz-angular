import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../models/question";
import {ButtonBlueComponent} from "../../shared/buttons/button-blue/button-blue.component";

@Component({
  selector: 'app-side-bar-test',
  standalone: true,
  imports: [
    ButtonBlueComponent
  ],
  templateUrl: './side-bar-test.component.html',
  styleUrl: './side-bar-test.component.css'
})
export class SideBarTestComponent{
  @Input() qArr: Question[] = [];
  @Input() timerValue: string = '00:00:00';
  @Output() navigateToQuestionEvent = new EventEmitter<string>();
  @Output() submitTestEvent = new EventEmitter<void>();

  navigateToQuestion(id: string) {
    this.navigateToQuestionEvent.emit(id);
  }
}
