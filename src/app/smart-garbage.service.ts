import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({  // this annotation is called as decorator
  providedIn: 'root' //Angular creates a single, shared instance of service and injects into any class that asks for it
})
export class SmartGarbageService {

  private URL = "http://springbootsou.us-east-1.elasticbeanstalk.com/getgarbage";

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.URL);
  }

  public postData(obj: any) {
    return this.http.post(this. URL, obj);
  }
}
