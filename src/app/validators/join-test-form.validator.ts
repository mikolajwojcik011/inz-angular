import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function joinTestFormValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const regrx: RegExp = /^[a-zA-Z]{4,8}-[a-zA-Z]{4,8}$/;
    if (value && typeof value === 'string' && !regrx.test(value)) {
      return {'invalidKey': 'Invalid key format'};
    }
    return null;
  }
}
