import {Component, EventEmitter, Output} from '@angular/core';
import {NavElementComponent} from "./nav-element/nav-element.component";
import {ButtonBlueComponent} from "../../shared/buttons/button-blue/button-blue.component";
import {ProgressionComponent} from "./progression/progression.component";
import {ButtonWhiteComponent} from "../../shared/buttons/button-white/button-white.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NavElementComponent,
    ButtonBlueComponent,
    ProgressionComponent,
    ButtonWhiteComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Output() showChange = new EventEmitter<string>();

  changeShow(value: string) {
    this.showChange.emit(value);
  }
}
