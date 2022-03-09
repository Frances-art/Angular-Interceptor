// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// @ts-ignore
import { Observable } from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
