import {Component, HostListener, Input, OnInit} from '@angular/core';
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
export class SelectTemplateComponent implements OnInit{
  @Input() options: string[] = [];

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

  onSelect(value: string) {
    this.selectedValue = value.replace(/-/g, ' ');
  }

  ngOnInit() {
    this.onSelect(this.options[0])
  }
}
