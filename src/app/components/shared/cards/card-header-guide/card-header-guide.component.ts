import {Component, Input} from '@angular/core';
import {ProgressionComponent} from "../../../create-test/top-bar/progression/progression.component";

@Component({
  selector: 'oce-card-header-guide',
  standalone: true,
    imports: [
        ProgressionComponent
    ],
  templateUrl: './card-header-guide.component.html',
  styleUrl: './card-header-guide.component.css'
})
export class CardHeaderGuideComponent {
  @Input() done: number = 0;
  @Input() total: number = 0;
  @Input() showText: boolean = true;
}
