import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {

  constructor(private http:HttpClient) { }

  executeHelloWorldService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
  }
  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/path-variable/${name}`,
      {headers}
    );
  }
  createBasicAuthHttpHeader(){
    let username = 'maysara'
    let password = 'maysara'
    // encode using windows base 64
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  // error is 
  // Access to XMLHttpRequest at 'http://localhost:8080/hello/path-variable/maysara' from origin 'http://localhost:4200' 
  // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


}
