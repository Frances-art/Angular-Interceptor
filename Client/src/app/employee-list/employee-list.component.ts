// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Employee } from '../employee';
// @ts-ignore
import { EmployeeService } from '../employee.service';
import {ApiHttpService} from "../api-http.service";

// @ts-ignore
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  pageTitle = 'Employee List';
  filteredEmployees: Employee[] = [];
  employees: Employee[] = [];
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  constructor(private employeeService: EmployeeService, private apiHttpService: ApiHttpService) { }

  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: Employee) =>
      employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
        (employees: Employee[]) => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
        (error: any) => this.errorMessage = <any>error
    );
  }

  deleteEmployee(id: string, name: string): void {
    if (id === '') {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Are you sure want to delete this Employee: ${name}?`)) {
        this.employeeService.deleteEmployee(id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    // @ts-ignore
    this.employeeService.getEmployees().subscribe(
      (employees: any) => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
        (error: any) => this.errorMessage = <any>error
    );
  }

}
