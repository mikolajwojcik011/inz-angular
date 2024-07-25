import { Component } from '@angular/core';
import {ConspectElementComponent} from "./conspect-element/conspect-element.component";

@Component({
  selector: 'app-conspect',
  standalone: true,
  imports: [
    ConspectElementComponent
  ],
  templateUrl: './conspect.component.html',
  styleUrl: './conspect.component.css'
})
export class ConspectComponent {

}
