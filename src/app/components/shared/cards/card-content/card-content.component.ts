import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'oce-card-content',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
  @Input() size: string = 'lg'
}
