import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Answer} from "../../../models/answer";
import {InputRadioChangeEvent} from "../../../models/input-radio-change-event";

@Component({
  selector: 'app-input-radio',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true
    }
  ],
  templateUrl: './input-radio.component.html',
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  styleUrl: './input-radio.component.css'
})
export class InputRadioComponent implements ControlValueAccessor {
  @Input() value: any;
  @Input() answer: Answer | undefined;
  @Input() name: string = '';
  @Input() index: number = 0;
  @Output() valueChange = new EventEmitter<InputRadioChangeEvent>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  isChecked: boolean = false;

  getClassObject() {
    if (this.isChecked) {
      return { 'ring-blue-600': true }
    }
    return { 'ring-gray-300': true }
  }

  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit({name: target.name , value: target.value});

    this.isChecked = target.checked;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
