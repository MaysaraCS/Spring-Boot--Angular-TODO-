import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username:string, password:string) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="maysara" && password === 'maysara') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  
  executeAuthenticationService(username:string, password:string) {
    // in the case of service calls we use observables asyn call
    // encode using windows base 64
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<AuthBean>(`http://localhost:8080/basicAuth`,
      {headers}
    ).pipe(
      // pipe checks if the request successed or fails 
      // pipe is for : if this thing is successful then do this thing as well 
      map(
        data =>{
          sessionStorage.setItem('authenticaterUser', username);
          // the observable is only working when someone subscribe to it
          // make sure that whoever subscribes to it can see the data
          return data;
        }
      )
    );
  }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}

export class AuthBean{
  constructor(public message:string){}
}