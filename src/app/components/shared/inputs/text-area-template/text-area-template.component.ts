import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-area-template',
  standalone: true,
  imports: [],
  templateUrl: './text-area-template.component.html',
  styleUrl: './text-area-template.component.css'
})
export class TextAreaTemplateComponent {
  @ViewChild('textAreaElement') textAreaElement!: ElementRef;
  @Input() value:string  = '';

  getTextAreaValue() {
    return this.textAreaElement.nativeElement.value;
  }
}
