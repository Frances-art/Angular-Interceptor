import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Bank} from "./bank-bank";

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private bankUrl = 'http://localhost:8080/bank';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  getBanks(): Observable<Bank[]> {
  this.bankUrl = 'http://localhost:8080/bank/index.json';
    return this.http.get<Bank[]>(this.bankUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBank(id: string ): Observable<Bank> {
    this.bankUrl = 'http://localhost:8080/bank/show';
    if (id === '') {
      return of(this.initializeBank());
    }
    const url = `${this.bankUrl}/${id}.json`;
    return this.http.get<Bank>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createBank(bank: Bank): Observable<Bank> {
    this.bankUrl = 'http://localhost:8080/bank/save.json';
    return this.http.post<Bank>(this.bankUrl, bank)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBank(id: string): Observable<{}> {
    this.bankUrl = 'http://localhost:8080/bank/delete';
    const url = `${this.bankUrl}/${id}.json`;
    return this.http.delete<Bank>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBank(id: string, bank: Bank): Observable<Bank> {
    this.bankUrl = 'http://localhost:8080/bank/update';
    const url = `${this.bankUrl}/${id}.json`;
    return this.http.put<Bank>(url, bank)
  .pipe(
      map(() => bank),
      catchError(this.handleError)
    );
  }

  // find(id: string): Observable <any>{
  //   return this.http.get (this.bankUrl + '/edit/' + id + '.json' , this.httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


  private initializeBank(): Bank {
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
