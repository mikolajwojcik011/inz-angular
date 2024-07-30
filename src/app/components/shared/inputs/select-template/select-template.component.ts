import {Component, HostListener} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-select-template',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './select-template.component.html',
  styleUrl: './select-template.component.css'
})
export class SelectTemplateComponent {
  isShown = false;
  selectedValue: string = 'complex true or false';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isShown = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
      this.isShown = false;
    }

  onSelect(value: string) {
    this.selectedValue = value.replace(/-/g, ' ');
  }
}
