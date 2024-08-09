import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'oce-button-mark-false',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button-mark-false.component.html',
  styleUrl: './button-mark-false.component.css'
})
export class ButtonMarkFalseComponent {
  @Input() isFalse: boolean = false;
}
