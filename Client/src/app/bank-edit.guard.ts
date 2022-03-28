import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BankEditComponent } from './bank-edit/bank-edit.component';


@Injectable({
  providedIn: 'root'
})
export class BankEditGuard implements CanDeactivate<BankEditComponent> {
  canDeactivate(component: BankEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.form.dirty) {
      const name = component.form.get('name').value || 'New Bank';
      return confirm(`Navigate away and lose all changes to ${name}?`);
    }
    return true;
  }
}
