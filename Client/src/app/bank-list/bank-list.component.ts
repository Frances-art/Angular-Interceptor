import { Component, OnInit } from '@angular/core';
import {Bank} from "../bank-bank";
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  pageTitle = 'bank List';
  filteredBanks: Bank[] = [];
  banks: Bank[] = [];
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBanks = this.listFilter ? this.performFilter(this.listFilter) : this.banks;
  }

  constructor(private employeeService: BankService) { }

  performFilter(filterBy: string): Bank[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.banks.filter((bank: Bank) =>
      bank.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.employeeService.getBanks().subscribe(
      banks => {
        this.banks = banks;
        this.filteredBanks = this.banks;
      },
      error => this.errorMessage = <any>error
    );
  }

  deleteEmployee(id: string, name: string): void {
    if (id === '') {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Are you sure want to delete this bank: ${name}?`)) {
        this.employeeService.deleteBank(id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    this.employeeService.getBanks().subscribe(
      banks => {
        this.banks = banks;
        this.filteredBanks = this.banks;
      },
      error => this.errorMessage = <any>error
    );
  }

}
