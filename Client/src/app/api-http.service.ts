import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import {Router} from "@angular/router";
import {Bank} from "./bank-bank";
import {HttpCacheService} from "./http-cache.service";


@Injectable({providedIn: 'root'})

export class ApiHttpService {
  constructor(private http: HttpClient, private router: Router) { }
  configUrl = '/';
 // configUrl = this.router.url.split("/").splice(2).join('/');
  domainClass = Object;
  id: any;

  display(){
    console.log('it works so url: '+this.configUrl);
  }

  list() {
    return this.http.get(this.configUrl);
  }
  save() {
    return this.http.post(this.configUrl, { });
  }
  get() {
    return this.http.get(this.configUrl+':id');
  }
  structure() {
    return this.http.get(this.configUrl);
  }
  update() {
    return this.http.put(this.configUrl, { });
  }
  delete() {
    return this.http.delete(this.configUrl);
  }
}

 /* constructor(private http: HttpClient) { }
  public employeesUrl = 'http://localhost:8080/bank/index';
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        catchError(ApiHttpService.handleError)
      );
  }

  public employeesUrl1= 'http://localhost:8080/bank/index'
  getEmployee(id: string | null): Observable<Employee> {
    if (id === '') {
      return of(this.initializeEmployee());
    }
    const url = `${this.employeesUrl1}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        catchError(ApiHttpService.handleError)
      );
  }

  public employeesUrl2= 'http://localhost:8080/bank/create'
  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Employee>(this.employeesUrl2, employee, { headers: headers })
      .pipe(
        catchError(ApiHttpService.handleError)
      );
  }
  public employeesUrl3= 'http://localhost:8080/bank/show'

  deleteEmployee(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl3}/${id}`;
    return this.http.delete<Employee>(url, { headers: headers })
      .pipe(
        catchError(ApiHttpService.handleError)
      );
  }
  public employeesUrl4= 'http://localhost:8080/bank/edit'
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl4}/${id}`;
    return this.http.put<Employee>(url, employee, { headers: headers })
      .pipe(
        map(() => employee),
        catchError(ApiHttpService.handleError)
      );
  }

  private static handleError(err:any  ) {
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
      id: null,
      name: null,
      address: null,
      contact: null,
      email: null,
      location: null,
    };
  }
}
*/
