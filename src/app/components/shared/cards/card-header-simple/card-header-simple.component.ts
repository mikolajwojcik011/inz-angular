import {Component, Input} from '@angular/core';

@Component({
  selector: 'oce-card-header-simple',
  standalone: true,
  imports: [],
  templateUrl: './card-header-simple.component.html',
  styleUrl: './card-header-simple.component.css'
})
export class CardHeaderSimpleComponent {
  @Input() compact: boolean = false;
  @Input() description: string = '';
}
