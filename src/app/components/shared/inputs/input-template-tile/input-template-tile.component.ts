import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-template-tile',
  standalone: true,
  imports: [],
  templateUrl: './input-template-tile.component.html',
  styleUrl: './input-template-tile.component.css'
})
export class InputTemplateTileComponent {
  @Input() for: string = '';
}
