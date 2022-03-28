import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BankListComponent} from "./bank-list/bank-list.component";
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankEditGuard } from './bank-edit.guard';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'banks',
    component: BankListComponent
  },
  {
    path: 'banks/:id',
    component: BankDetailComponent
  },
  {
    path: 'banks/edit/:id',
    canDeactivate: [BankEditGuard],
    component: BankEditComponent
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
