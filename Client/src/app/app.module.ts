// @
import { BrowserModule } from '@angular/platform-browser';
// @
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// @
import {HeaderComponent} from "./header/header.component";
// @
import {FooterComponent} from "./footer/footer.component";
// @
import { LayoutComponent } from './layout/layout.component';
// @
import { BankListComponent } from './bank-list/bank-list.component';
// @
import { BankEditComponent } from './bank-edit/bank-edit.component';
// @
import { BankDetailComponent } from './bank-detail/bank-detail.component';
// @
import { RouterModule } from '@angular/router';
// @
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// @
import { routes } from './router-config';
// @
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// @
import { CacheInterceptor } from './cache.interceptor';
import {ApiHttpService} from "./api-http.service";

// @
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BankEditComponent,
    BankEditComponent,
    BankDetailComponent,
    BankListComponent,
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
