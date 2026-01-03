import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../../app/service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../../app/service/auth/basic-authentication.service';

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
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService
  ){

  }
  ngOnInit() {
      
  }
  handleLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    // this is now a sync call
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
  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    
    // this is now a async call
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data =>{
        console.log(data)
        //Redirect to Welcome Page
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error =>{
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}
