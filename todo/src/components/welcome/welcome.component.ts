import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [ RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Some Welcome Message'
  name = ''

  constructor(private route:ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    // Only auto-navigate to todos if just logged in
    if (sessionStorage.getItem('justLoggedIn') === 'true') {
      sessionStorage.removeItem('justLoggedIn');
      setTimeout(() => {
        this.router.navigate(['todos']);
      }, 1000); // 1 second delay
    }
  }
}
