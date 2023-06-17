import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "./login-page/Login/token-storage.service";
import {AuthServiceService} from "./login-page/Login/auth-service.service";
import {EvenBusService} from "./login-page/Login/even-bus.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: TokenStorageService,
    private authService: AuthServiceService,
    private eventBusService: EvenBusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['./login']);
  }

  goToBookList() {
    this.router.navigate(['./book-info']);
  }

  goToHomePage(){
    this.router.navigate(['./'])
  }

  goToSignUp() {
    this.router.navigate(['./signup'])
  }
}
