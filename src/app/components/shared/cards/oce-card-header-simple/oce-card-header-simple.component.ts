import {Component, Input} from '@angular/core';

@Component({
  selector: 'oce-card-header-simple',
  standalone: true,
  imports: [],
  templateUrl: './oce-card-header-simple.component.html',
  styleUrl: './oce-card-header-simple.component.css'
})
export class OceCardHeaderSimpleComponent {
  @Input() compact: boolean = false;
  @Input() description: string = '';
}
