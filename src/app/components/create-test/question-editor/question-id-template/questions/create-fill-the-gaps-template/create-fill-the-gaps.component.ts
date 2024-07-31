import { Component, ViewChild} from '@angular/core';
import {TextAreaTemplateComponent} from "../../../../../shared/inputs/text-area-template/text-area-template.component";
import {ProgressionComponent} from "../../../../top-bar/progression/progression.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {
  InputTemplateTileComponent
} from "../../../../../shared/inputs/input-template-tile/input-template-tile.component";

@Component({
  selector: 'app-create-fill-the-gaps-template',
  standalone: true,
  imports: [
    TextAreaTemplateComponent,
    ProgressionComponent,
    JsonPipe,
    InputTemplateTileComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './create-fill-the-gaps-template.component.html',
  styleUrl: './create-fill-the-gaps.component.css'
})
export class CreateFillTheGapsComponent{
  @ViewChild('textarea') textarea!: TextAreaTemplateComponent | undefined;
  show: number = 0;
  textareaValue: string = '';
  words: string[] = [];
  gapsAt: number[] = [];
  punctuation: any = /[,?!]/g;

  prev() {
    if(this.show > 0) this.show--;
  }

  next() {
    if (this.show < 2) this.show++;
    if (this.textarea) {
      this.textareaValue = this.textarea.getTextAreaValue();
      this.words = this.textareaValue.split(/(\b|[.,!?;:])/).filter(part => part.trim() !== '');
    }
  }

  createGap(index: number){
    if (!this.gapsAt.includes(index)) {
      this.gapsAt.push(index);
    }
    console.log(this.gapsAt);
  }
}
