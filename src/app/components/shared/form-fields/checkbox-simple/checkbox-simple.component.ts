import {Component, Input} from '@angular/core';
import {FocusActiveDirective} from "../../../../directives/form-field-input.directive";

@Component({
  selector: 'oce-checkbox-simple',
  standalone: true,
    imports: [
        FocusActiveDirective
    ],
  templateUrl: './checkbox-simple.component.html',
  styleUrl: './checkbox-simple.component.css'
})
export class CheckboxSimpleComponent {
  @Input() formControl: any = null;
}
