import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



// tslint:disable-next-line: no-unused-expression
export class DataService {


  constructor(private http: HttpClient) {
    var client_id = '32187b5033a348419292ebd767cfe7b3'; // Your client id
    var client_secret = '9bd7727fb9fc429ab97bf99d033319fb'; // Your secret
    var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
    
  }
  getPais() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }


  getMusica(){

    const headers = new HttpHeaders({
      'Authorization': ' Bearer BQCoMcoJt2cPjNVDVimoP8HxbE99hrELrfJI6q2qQdpp4AplxrwQV650mh0TZcWznMQ1hnIgpgF4ZxynJDf9bv3W-2gNZohgSZS_tjCLVfpFN_f4IzbaYvvRSmkZp0lI1rxpTCOPvK0U'
    });
    let  peticion=this.http.get('https://api.spotify.com/v1/browse/new-releases' , { headers });

    
     return peticion;

     }
}
