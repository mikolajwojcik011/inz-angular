import { Component } from '@angular/core';
import {NavElementComponent} from "./nav-element/nav-element.component";
import {ButtonBlueComponent} from "../../shared/buttons/button-blue/button-blue.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NavElementComponent,
    ButtonBlueComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
