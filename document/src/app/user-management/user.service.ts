import {Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable()

export class UserService {
    public url="http://localhost:3000/user"

    constructor( public http: HttpClient) { }

    getAll() {
        return this.http.get(this.url);
    }
getUser(id:number){
  return this.http.get(this.url+'/'+id)
}
    NewUser(user: any) {
        return this.http.post(this.url, user,httpOptions);
    }
       
    updataUser(user:any,id:number){
      return this.http.put(this.url+'/'+id,user,httpOptions)
    }
    deleteUser(id: any) {
        return this.http.delete(this.url+'/'+id);
    }
}