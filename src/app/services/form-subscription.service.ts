import {EventEmitter, Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable, Subscription, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormSubscriptionService {
  constructor() {
  }

  public subscribeToFormChanges(form: FormGroup, formChange: EventEmitter<any>, destroy$: Observable<void>): Subscription {
    return form.valueChanges.pipe(
      takeUntil(destroy$)
    ).subscribe(() => {
      formChange.emit(form.value);
    });
  }
}
