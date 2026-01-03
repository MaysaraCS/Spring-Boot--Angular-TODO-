import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Api_URL } from '../../app.constants';


export const TOKEN = "token"
export const AUTHINTICATED_USER = "authenticaterUser"

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
  
  executeAuthenticationService(username:string, password:string) {
    // in the case of service calls we use observables asyn call
    // encode using windows base 64
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<AuthBean>(`${Api_URL}/basicAuth`,
      {headers}
    ).pipe(
      // pipe checks if the request successed or fails 
      // pipe is for : if this thing is successful then do this thing as well 
      map(
        data =>{
          sessionStorage.setItem(AUTHINTICATED_USER, username);
          // create the basic auth token
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          // the observable is only working when someone subscribe to it
          // make sure that whoever subscribes to it can see the data
          return data;
        }
      )
    );
  }
  

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHINTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHINTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHINTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthBean{
  constructor(public message:string){}
}