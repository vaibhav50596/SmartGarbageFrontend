import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({  // this annotation is called as decorator
  providedIn: 'root' //Angular creates a single, shared instance of service and injects into any class that asks for it
})
export class SmartGarbageService {

  private URL = "http://localhost:5005/getStudent/2";

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.URL);
  }
}
