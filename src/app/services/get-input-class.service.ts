import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInputClassService {
  getInputClass(formControl: string, qformGroup: any){
    let val = qformGroup.controls[formControl].value
    return !!val;
  }
}
