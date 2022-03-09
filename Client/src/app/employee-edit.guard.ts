// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { CanDeactivate } from '@angular/router';
// @ts-ignore
import { Observable } from 'rxjs';
// @ts-ignore
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class EmployeeEditGuard implements CanDeactivate<EmployeeEditComponent> {
  canDeactivate(component: EmployeeEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    // @ts-ignore
    if (component.employeeForm.dirty) {
      // @ts-ignore
      const name = component.employeeForm.get('name').value || 'New Employee';
      return confirm(`Navigate away and lose all changes to ${name}?`);
    }
    return true;
  }
}
