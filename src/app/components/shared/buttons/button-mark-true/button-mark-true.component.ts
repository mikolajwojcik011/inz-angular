import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'oce-button-mark-true',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button-mark-true.component.html',
  styleUrl: './button-mark-true.component.css'
})
export class ButtonMarkTrueComponent {
  @Input() isCorrect: boolean = false;
}
