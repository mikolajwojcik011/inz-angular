import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-blue',
  standalone: true,
  imports: [],
  templateUrl: './button-blue.component.html',
  styleUrl: './button-blue.component.css'
})
export class ButtonBlueComponent {
  @Input() content!: string;
}
