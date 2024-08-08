import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-select-element',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './select-element.component.html',
  styleUrl: './select-element.component.css'
})
export class SelectElementComponent{
  @Input() option: string = '';
  @Input() for: string = '';
  iconString:string = '';

}
