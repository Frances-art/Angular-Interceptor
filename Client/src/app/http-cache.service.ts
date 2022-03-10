// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpResponse } from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = { };

  constructor() { }

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  invalidateCache(): void {
    this.requests = { };
  }
}

export class SharedHttpCacheService {
}
