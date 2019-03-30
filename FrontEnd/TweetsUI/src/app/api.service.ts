import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders} from '@angular/common/http';
import "core-js/es7/reflect";
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {

  baseurl = "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http: HttpClient) { }
   
  getAllTweets(): Observable<any>
  {
    return this.http.get(this.baseurl + '/tweets/', {headers: this.httpHeaders});
  }
}


