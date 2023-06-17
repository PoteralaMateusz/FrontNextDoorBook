import {Component} from '@angular/core';
import {SignIn} from "./Login/SignIn";
import {LoginService} from "./Login/login.service";
import {Observable} from "rxjs";
import {LoginUser} from "./Login/LoginUser";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userToLoginData = {} as SignIn;
  public loginUser = {} as LoginUser;

  constructor(private loginService:LoginService) {
  }
  onSubmit(event: any) {
    this.userToLoginData.username = event.target.username.value;
    this.userToLoginData.password = event.target.password.value;

    const loginUser = this.loginService.signIn(this.userToLoginData);
    loginUser.subscribe(response => {
      this.loginUser = response;
      console.log(this.loginUser.email);
    });
  }
}
