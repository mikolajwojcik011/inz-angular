import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-remove',
  standalone: true,
  imports: [],
  templateUrl: './button-remove.component.html',
  styleUrl: './button-remove.component.css'
})
export class ButtonRemoveComponent {
  @Input() label: boolean = true;
}
