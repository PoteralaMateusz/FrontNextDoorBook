import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BookInfoComponent} from "./book-info/book-info.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {SearchPageComponent} from "./search-page/search-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'books', component: BookInfoComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'search', component: SearchPageComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
