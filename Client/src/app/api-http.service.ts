import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class ApiHttpService {
  constructor(private http: HttpClient, private router: Router) { }
  // configUrl = '/';
  configUrl = this.router.url.split("/").splice(2).join('/');
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
