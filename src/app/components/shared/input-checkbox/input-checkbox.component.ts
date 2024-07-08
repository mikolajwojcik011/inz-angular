import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.css'
})
export class InputCheckboxComponent {
  @Input() label: string = '';
  @Input() for: string = '';
  @Input() isChecked: boolean = false;
}
