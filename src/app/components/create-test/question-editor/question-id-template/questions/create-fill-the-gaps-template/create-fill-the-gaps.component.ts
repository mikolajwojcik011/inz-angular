import {Component, ViewChild} from '@angular/core';
import {TextAreaTemplateComponent} from "../../../../../shared/inputs/text-area-template/text-area-template.component";
import {ProgressionComponent} from "../../../../top-bar/progression/progression.component";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {
  InputTemplateTileComponent
} from "../../../../../shared/inputs/input-template-tile/input-template-tile.component";
import {WordComponent} from "./word/word.component";
import {
  InputTemplateTextComponent
} from "../../../../../shared/inputs/input-template-text/input-template-text.component";
import {CardComponent} from "../../../../../shared/cards/card/card.component";
import {
  CardHeaderSimpleComponent
} from "../../../../../shared/cards/card-header-simple/card-header-simple.component";
import {
  CardHeaderGuideComponent
} from "../../../../../shared/cards/card-header-guide/card-header-guide.component";
import {CardContentComponent} from "../../../../../shared/cards/card-content/card-content.component";

@Component({
  selector: 'app-create-fill-the-gaps-template',
  standalone: true,
  imports: [
    TextAreaTemplateComponent,
    ProgressionComponent,
    JsonPipe,
    InputTemplateTileComponent,
    NgIf,
    NgForOf,
    NgClass,
    WordComponent,
    InputTemplateTextComponent,
    CardComponent,
    CardHeaderSimpleComponent,
    CardHeaderGuideComponent,
    CardContentComponent
  ],
  templateUrl: './create-fill-the-gaps-template.component.html',
  styleUrl: './create-fill-the-gaps.component.css'
})
export class CreateFillTheGapsComponent {
  @ViewChild('textarea') textarea!: TextAreaTemplateComponent | undefined;
  show: number = 0;
  textareaValue: string = '';
  words: any[] = [];
  finalWords: any[] = [];

  prev() {
    if (this.show > 0) this.show--;
    if (this.show === 0) {
      this.words = [];
    }
  }

  next() {
    if (this.show < 2) this.show++;
    if (this.textarea) {
      let words: string[] = [];
      this.textareaValue = this.textarea?.getTextAreaValue();
      words = this.textareaValue.split(/(\b|[.,!?;:])/).filter(part => part.trim() !== '');

      words.forEach((word: string, index: number) => {
        this.createWord(word, index);
      });
    }
    console.log(this.finalWords)
  }

  createWord(word: string, index: number) {
    this.words.push({
      index: index,
      word: word,
      gaps: [],
      whole: false
    });
  }

  displayWord(word: any, gaps: any) {

  }

  createFinalWords() {
    this.finalWords = [];
    let part: string = ''
    this.words.forEach((word: { index: number, word: string, gaps: number[], whole: boolean }) => {
      if (word.gaps.length === 0 && !word.whole) {
        part = part + word.word + ' '
      }
      if (word.gaps.length !== 0 || word.whole) {
        this.finalWords.push(part)
        part = ''
        let gapWord: {} = {}
        if (word.whole) {
          console.log('whole')
          gapWord = {
            word: word.word,
            gaps: 'whole'
          }
        }
        if (word.gaps.length !== 0) {
          console.log('gaps')
          gapWord = {
            word: word.word,
            gaps: word.gaps
          }
        }
        this.finalWords.push(gapWord)
      }
    });
    this.finalWords.push(part)
  }

  updateWord(updatedWord: { index: string, word: string, gaps: number[], whole: boolean }) {
    const wordIndex = this.words.findIndex(word => word.index === updatedWord.index);
    if (wordIndex !== -1) {
      this.words[wordIndex] = updatedWord;
    }
    this.createFinalWords();
  }
}
