import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Employee} from "./employee-employee";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesUrl = 'http://localhost:3333/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        catchError(EmployeeService.handleError)
      );
  }

  getEmployee(id: string | null): Observable<Employee> {
    if (id === '') {
      return of(this.initializeEmployee());
    }
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        catchError(EmployeeService.handleError)
      );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Employee>(this.employeesUrl, employee, { headers: headers })
      .pipe(
        catchError(EmployeeService.handleError)
      );
  }

  deleteEmployee(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete<Employee>(url, { headers: headers })
      .pipe(
        catchError(EmployeeService.handleError)
      );
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${id}`;
    return this.http.put<Employee>(url, employee, { headers: headers })
      .pipe(
        map(() => employee),
        catchError(EmployeeService.handleError)
      );
  }

  private static handleError(err:any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeEmployee(): Employee {
    return {
      id: '',
      name: '',
      address: '',
      gender: '',
      company: '',
      designation: '',
    };
  }
}
