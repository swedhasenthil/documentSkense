import {Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable()

export class TableService {
    public url="http://localhost:3000/tableDropdown";
    public urlCountiers = "http://localhost:3000/Countries";

    constructor( public http: HttpClient) { }

    tableList( ){
        return this.http.get(this.url)
    }
    countryList(){
        return this.http.get(this.urlCountiers)
    }
    updataUser(user:any,id:number){
      return this.http.put(this.url+'/'+id,user,httpOptions)
    }
    saveTableAll(data:any){
      return this.http.post(this.url,data,httpOptions)
    }

}