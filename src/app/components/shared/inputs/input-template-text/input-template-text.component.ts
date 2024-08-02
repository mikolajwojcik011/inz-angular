import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-template-text',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './input-template-text.component.html',
  styleUrl: './input-template-text.component.css'
})
export class InputTemplateTextComponent {

}
