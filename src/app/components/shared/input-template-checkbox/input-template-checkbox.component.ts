import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgOptimizedImage} from "@angular/common";
import * as romans from 'romans'


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
  @Input() index: number = 1;
  @Input() listStyle: string = 'number';
  @Input() imgSrc: string | null = null;

  getListStyle(index: number) {
    if (this.listStyle === 'number') return index + 1 + '.';
    if (this.listStyle === 'letter') return String.fromCharCode(65 + index).toLowerCase() + '.';
    if (this.listStyle === 'roman') return romans.romanize((index + 1)) + '.';
    if (this.listStyle === 'capital') return String.fromCharCode(65 + index) + '.';
    return index + 1 + '.';
  }
}
