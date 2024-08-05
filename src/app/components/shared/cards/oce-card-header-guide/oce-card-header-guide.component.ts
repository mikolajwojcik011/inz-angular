import {Component, Input} from '@angular/core';
import {ProgressionComponent} from "../../../create-test/top-bar/progression/progression.component";

@Component({
  selector: 'oce-card-header-guide',
  standalone: true,
    imports: [
        ProgressionComponent
    ],
  templateUrl: './oce-card-header-guide.component.html',
  styleUrl: './oce-card-header-guide.component.css'
})
export class OceCardHeaderGuideComponent {
  @Input() done: number = 0;
  @Input() total: number = 0;
  @Input() showText: boolean = true;
}
