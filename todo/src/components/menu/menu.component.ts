import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HardcodedAuthenticationService } from '../../app/service/hardcoded-authentication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NgIf,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  constructor(public hardcodedAuthenticationService 
    : HardcodedAuthenticationService){

  }
  ngOnInit(): void {
        //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
