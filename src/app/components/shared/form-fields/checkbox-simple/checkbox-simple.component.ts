import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FocusActiveDirective} from "../../../../directives/form-field-input.directive";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'oce-checkbox-simple',
  standalone: true,
  imports: [
    FocusActiveDirective,
    ReactiveFormsModule
  ],
  templateUrl: './checkbox-simple.component.html',
  styleUrl: './checkbox-simple.component.css'
})
export class CheckboxSimpleComponent{

}
