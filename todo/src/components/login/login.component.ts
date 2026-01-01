import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../../app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username = 'maysara'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ){

  }
  ngOnInit() {
      
  }
  handleLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // Set flag to indicate just logged in
      sessionStorage.setItem('justLoggedIn', 'true');
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
