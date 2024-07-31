import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progression',
  standalone: true,
  imports: [],
  templateUrl: './progression.component.html',
  styleUrl: './progression.component.css'
})
export class ProgressionComponent {
  @Input() done: number = 0;
  @Input() total: number = 0;
  @Input() showText: boolean = true;
}
