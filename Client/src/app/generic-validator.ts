// @ts-ignore
import { FormGroup } from '@angular/forms';

export class GenericValidator {

  constructor(private validationMessages: { [key: string]: { [key: string]: string } }) {
  }

  processMessages(container: FormGroup | undefined): { [p: string]: string } {
    const messages = {};
    // @ts-ignore
    for (const controlKey in container.controls) {
      // @ts-ignore
      if (container.controls.hasOwnProperty(controlKey)) {
        // @ts-ignore
        const c = container.controls[controlKey];
        // If it is a FormGroup, process its child controls.
        if (c instanceof FormGroup) {
          const childMessages = this.processMessages(c);
          Object.assign(messages, childMessages);
        } else {
          // Only validate if there are validation messages for the control
          if (this.validationMessages[controlKey]) {
            // @ts-ignore
            messages[controlKey] = '';
            if ((c.dirty || c.touched) && c.errors) {
              Object.keys(c.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  // @ts-ignore
                  messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                }
              });
            }
          }
        }
      }
    }
    return messages;
  }

  getErrorCount(container: FormGroup): number {
    let errorCount = 0;
    for (const controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        if (container.controls[controlKey].errors) {
          // @ts-ignore
          errorCount += Object.keys(container.controls[controlKey].errors).length;
          console.log(errorCount);
        }
      }
    }
    return errorCount;
  }
}
