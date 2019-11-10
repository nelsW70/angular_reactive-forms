import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannontContainSpace(
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannontContainSpace: true };
    } else {
      return null;
    }
  }
}
