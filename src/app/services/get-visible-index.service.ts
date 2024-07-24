import { Injectable } from '@angular/core';
import romans from "romans";

@Injectable({
  providedIn: 'root'
})
export class getVisibleIndexService {
  getVisibleIndex(index: number, listStyle: string) {
    if (listStyle === 'number') return index + 1 + '.';
    if (listStyle === 'letter') return String.fromCharCode(65 + index).toLowerCase() + '.';
    if (listStyle === 'roman') return romans.romanize((index + 1)) + '.';
    if (listStyle === 'capital') return String.fromCharCode(65 + index) + '.';
    return index + 1 + '.';
  }
}
