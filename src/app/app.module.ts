import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';


import {AppComponent} from './app.component';
import {UserBooks} from './user-books/user-books';
import {LoginPageComponent} from './login-page/login-page.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {RegisterPageComponent} from './register-page/register-page.component';

import {AddBookComponent} from "./add-book/add-book.component";
import {ProfileComponent} from "./profile/profile.component";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import { SearchPageComponent } from './search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserBooks,
    LoginPageComponent,
    HomeComponent,
    RegisterPageComponent,
    AddBookComponent,
    ProfileComponent,
    SearchPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
