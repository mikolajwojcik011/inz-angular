import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'oce-card-content',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './oce-card-content.component.html',
  styleUrl: './oce-card-content.component.css'
})
export class OceCardContentComponent {
  @Input() size: string = 'lg'
}
