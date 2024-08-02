import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent implements OnInit, AfterViewInit{
  @Input() word: {index: string, word: string, gaps: number[], whole: boolean} = {index: '', word: '', gaps: [], whole: false};
  @Output() wordUpdated = new EventEmitter<any>();
  punctuation: any = /[.,!?;:]/g;
  hasPunctuation: boolean = false;
  showGapCreation: boolean = false;
  positionClass: string = 'left-0';

  constructor(private el: ElementRef) {}

  showGapCreationInterface() {
    this.showGapCreation = true;
  }

  hideGapCreationInterface() {
    this.showGapCreation = false;
  }

  gapWholeWord() {
    this.word.whole = !this.word.whole;
    this.word.gaps = [];
    this.wordUpdated.emit(this.word);
  }

  createGap(gapPositon: number) {
    if(this.word.whole) return;
    const gapIndexPosition = this.word.gaps.indexOf(gapPositon);
    if (gapIndexPosition !== -1) {
      this.word.gaps.splice(gapIndexPosition, 1);
    } else {
      this.word.gaps.push(gapPositon);
    }
    this.wordUpdated.emit(this.word);
  }

  setPositionClass() {
    const element = this.el.nativeElement.querySelector('span');
    const container = this.el.nativeElement.closest('p');
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const elementCenter = elementRect.left + elementRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;

    if (elementCenter < containerCenter) {
      this.positionClass = 'left-0';
    } else {
      this.positionClass = 'right-0';
    }
  }

  ngOnInit() {
    this.hasPunctuation = this.punctuation.test(this.word);
  }

  ngAfterViewInit() {
    this.setPositionClass();
  }
}
