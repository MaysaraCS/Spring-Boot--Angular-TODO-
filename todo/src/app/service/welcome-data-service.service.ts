import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/path-variable/${name}`);
  }
}
