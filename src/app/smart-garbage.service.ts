import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({  // this annotation is called as decorator
  providedIn: 'root' //Angular creates a single, shared instance of service and injects into any class that asks for it
})
export class SmartGarbageService {

  private getURL = "http://localhost:5006/getgarbage";
  private postURL = "http://localhost:5006/postgarbage";

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.getURL);
  }

  public postData(obj: any) {
    return this.http.post(this. postURL, obj);
  }
}
