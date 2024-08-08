import {Component, HostListener, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {SelectElementComponent} from "./select-element/select-element.component";

@Component({
  selector: 'app-select-template',
  standalone: true,
  imports: [
    NgClass,
    SelectElementComponent
  ],
  templateUrl: './select-template.component.html',
  styleUrl: './select-template.component.css'
})
export class SelectTemplateComponent{
  @Input() selected: string = '';
  @Input() header: string = 'Test';

  isShown = false;
  selectedValue: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isShown = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
      this.isShown = false;
    }
}
