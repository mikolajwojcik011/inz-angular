import { Component } from '@angular/core';
import {ConspectElementComponent} from "../conspect/conspect-element/conspect-element.component";

@Component({
  selector: 'app-examinee-identification',
  standalone: true,
  imports: [
    ConspectElementComponent
  ],
  templateUrl: './examinee-identification.component.html',
  styleUrl: './examinee-identification.component.css'
})
export class ExamineeIdentificationComponent {

}
