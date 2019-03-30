import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  tweets = [{body:"Hi First Tweet",date:"11:19 AM - 25 Mar 2019"},{body:"Hi Second Tweet",date:"1:19 AM - 28 Mar 2019"}];
  constructor(private api: ApiService){
    this.getTweets();
  }
  getTweets = () => {
    this.api.getAllTweets().subscribe(
    data => {
     this.tweets = data['results'];
    },
    error => {
    console.log(error);
    }
    )
  }
  
}
