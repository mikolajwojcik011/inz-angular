import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-element',
  standalone: true,
  imports: [],
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.css'
})
export class NavElementComponent {
  @Input() isFinished: boolean = false;

}
