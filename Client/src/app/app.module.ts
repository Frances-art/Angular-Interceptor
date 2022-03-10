// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// @ts-ignore
import {HeaderComponent} from "./header/header.component";
// @ts-ignore
import {FooterComponent} from "./footer/footer.component";
// @ts-ignore
import { LayoutComponent } from './layout/layout.component';
// @ts-ignore
import { EmployeeListComponent } from './employee-list/employee-list.component';
// @ts-ignore
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
// @ts-ignore
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// @ts-ignore
import { RouterModule } from '@angular/router';
// @ts-ignore
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// @ts-ignore
import { routes } from './router-config';
// @ts-ignore
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// @ts-ignore
import { CacheInterceptor } from './cache.interceptor';
import {ApiHttpService} from "./api-http.service";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ApiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
