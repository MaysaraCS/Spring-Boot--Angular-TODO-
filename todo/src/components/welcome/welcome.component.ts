import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WelcomeDataServiceService } from '../../app/service/welcome-data-service.service';

@Component({
  selector: 'app-welcome',
  imports: [ RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Some Welcome Message'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(private route:ActivatedRoute, private service:WelcomeDataServiceService){

  }
  ngOnInit() {
    // this.name = this.route.snapshot.params['name'];
    // // Only auto-navigate to todos if just logged in
    // if (sessionStorage.getItem('justLoggedIn') === 'true') {
    //   sessionStorage.removeItem('justLoggedIn');
    //   setTimeout(() => {
    //     this.router.navigate(['todos']);
    //   }, 1000); // 1 second delay
    // }
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessege(){
    //console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessege')
  }

  getWelcomeMessegeWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.messege
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.message);
    this.welcomeMessageFromService = error.error.messege;
  }
}
