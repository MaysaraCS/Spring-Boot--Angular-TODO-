import { BasicAuthenticationService } from './../auth/basic-authentication.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthenticationService :BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    
    // let username = 'maysara'
    // let password = 'maysara'
    // // encode using windows base 64
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();


    if(basicAuthHeaderString && username){

      // clone the request
      request = request.clone({
        setHeaders:{
          Authorization: basicAuthHeaderString
        }
      })
    }
      return next.handle(request);
    }

  
}
