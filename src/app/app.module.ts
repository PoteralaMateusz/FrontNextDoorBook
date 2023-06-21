import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {BookInfoComponent} from './book-info/book-info.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { RegisterPageComponent } from './register-page/register-page.component';
import {authInterceptorProviders} from "./Authorization/auth.interceptor";
import { BookAddComponent } from './book-add/book-add.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book-info', component: BookInfoComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'signup',component:RegisterPageComponent},
  {path:'bookAdd',component:BookAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    LoginPageComponent,
    HomeComponent,
    RegisterPageComponent,
    BookAddComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
