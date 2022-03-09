import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// @ts-ignore
import { EmployeeListComponent } from './employee-list/employee-list.component';
// @ts-ignore
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
// @ts-ignore
import { EmployeeEditGuard } from './employee-edit.guard';
// @ts-ignore
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent
  },
  {
    path: 'employees/:id/edit',
    canDeactivate: [EmployeeEditGuard],
    component: EmployeeEditComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
