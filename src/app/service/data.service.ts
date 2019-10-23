import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line: no-unused-expression
export class DataService {

  constructor(private http: HttpClient) {

  }
  getPais() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }
}
