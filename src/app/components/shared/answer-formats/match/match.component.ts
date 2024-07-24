//todo: Finish match component

import {Component, Input} from '@angular/core';
import {Answer} from "../../../../models/answer";

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  @Input() answers: Answer[] = [];
  @Input() questionId: string = '';
  @Input() qformGroup: any;
}
