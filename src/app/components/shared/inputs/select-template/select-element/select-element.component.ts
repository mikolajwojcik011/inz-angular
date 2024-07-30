import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-select-element',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './select-element.component.html',
  styleUrl: './select-element.component.css'
})
export class SelectElementComponent implements OnInit{
  @Input() option: string = '';
  iconString:string = '';

  ngOnInit() {
    if(this.option === 'complex-true-or-false'){
      this.iconString = 'bi bi-circle-half';
    }

    if(this.option === 'match'){
      this.iconString = 'bi bi-shuffle';
    }

    if(this.option === 'multiple-choice'){
      this.iconString = 'bi bi-list-check';
    }

    if(this.option === 'number'){
      this.iconString = 'bi bi-1-circle';
    }
  }
}
