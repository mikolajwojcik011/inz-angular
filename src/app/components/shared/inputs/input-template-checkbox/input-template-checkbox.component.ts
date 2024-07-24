import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-input-template-checkbox',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './input-template-checkbox.component.html',
  styleUrl: './input-template-checkbox.component.css'
})
export class InputTemplateCheckboxComponent {
  @Input() label: string | null = null;
  @Input() for: string = '';
  @Input() isChecked: boolean = false;
  @Input() visibleIndex: string = 'number';
  @Input() imgSrc: string | null = null;
}

