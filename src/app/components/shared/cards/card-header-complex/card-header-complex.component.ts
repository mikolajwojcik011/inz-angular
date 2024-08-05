import {Component, Input} from '@angular/core';
import {ButtonCopyComponent} from "../../buttons/button-copy/button-copy.component";
import {ButtonDownComponent} from "../../buttons/button-down/button-down.component";
import {ButtonRemoveComponent} from "../../buttons/button-remove/button-remove.component";
import {ButtonUpComponent} from "../../buttons/button-up/button-up.component";
import {SelectTemplateComponent} from "../../inputs/select-template/select-template.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'oce-card-header-complex',
  standalone: true,
  imports: [
    ButtonCopyComponent,
    ButtonDownComponent,
    ButtonRemoveComponent,
    ButtonUpComponent,
    SelectTemplateComponent,
    NgClass
  ],
  templateUrl: './card-header-complex.component.html',
  styleUrl: './card-header-complex.component.css'
})
export class CardHeaderComplexComponent {
  @Input() size: string = 'lg'
}
