import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  constructor(private http: HttpClient) {

    
  }
  
  getCategorias(){

    const headers = new HttpHeaders({
      'Authorization': ' Bearer BQCoMcoJt2cPjNVDVimoP8HxbE99hrELrfJI6q2qQdpp4AplxrwQV650mh0TZcWznMQ1hnIgpgF4ZxynJDf9bv3W-2gNZohgSZS_tjCLVfpFN_f4IzbaYvvRSmkZp0lI1rxpTCOPvK0U'
    });
    let  peticion=this.http.get('https://api.spotify.com/v1/browse/categories' , { headers });
    console.log(peticion);
    
     return peticion;

    }
}
