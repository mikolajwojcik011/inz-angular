import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgClass} from "@angular/common";

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
    NgClass
  ],
  styleUrl: './input-radio.component.css'
})
export class InputRadioComponent implements ControlValueAccessor {
  @Input() value: any;
  @Input() radioValue: any;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
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
