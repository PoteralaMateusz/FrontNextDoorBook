import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../_services/auth-service.service";
import {Address} from "../_entities/address";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    email: null,
    city: null,
    street: null,
    numberHouse: null,
    zipCode: null,
    district: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  address: Address = {} as Address;

  constructor(private authService: AuthServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username, email, password, city, street, numberHouse, zipCode, district} = this.form;
    this.address.street = street;
    this.address.zipCode = zipCode;
    this.address.district = district;
    this.address.numberHouse = numberHouse;
    this.address.city = city;
    this.authService.register(username, email, password, this.address).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.isSignUpFailed = true;
      }
    });
  }
}
