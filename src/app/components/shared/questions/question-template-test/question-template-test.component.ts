import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-question-template-test',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './question-template-test.component.html',
  styleUrl: './question-template-test.component.css'
})
export class QuestionTemplateTestComponent {
  @Input() header: string | null = null;
  @Input() imgSrc: string | null = null;
  @Input() index: number = 1;
  @Input() isLast: boolean = false;
}
