import {Component, Input, OnInit} from '@angular/core';
import {getVisibleIndexService} from "../../../../services/get-visible-index.service";

@Component({
  selector: 'oce-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent implements OnInit {
  @Input() index: number = 0;
  @Input() style: string = 'number';
  visibleIndex: string = '';

  constructor(
    private gvis: getVisibleIndexService
  ) {}

  ngOnInit() {
    this.visibleIndex = this.gvis.getVisibleIndex(this.index, this.style);
  }
}
