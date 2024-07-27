import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-conspect-element',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './conspect-element.component.html',
  styleUrl: './conspect-element.component.css'
})
export class ConspectElementComponent {
  @Input() question_header: string = 'No header provided';
  @Input() amount_of_answers: number | null = null;
  @Input() question_index: number | null = null;
  @Input() isActive: boolean = false;
}
