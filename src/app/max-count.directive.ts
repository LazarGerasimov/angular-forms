import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]'
})
export class MaxCountDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented')
  }

  registerOnValidatorChange(fn: () => void): void {
    throw new Error('Method not implemented')
  }

}
