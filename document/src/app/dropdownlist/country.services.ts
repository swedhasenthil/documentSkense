import {Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable()

export class CountryService {
    public url="http://localhost:3000/Countries"

    constructor( public http: HttpClient) { }

    getCountryName() {
        return this.http.get(this.url);
    }
    listState(data:any){
      return this.http.get(this.url+'/'+data);
    }

}