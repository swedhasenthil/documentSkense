import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  // API url
  baseApiUrl = "http://localhost:3000/fileUpload"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:any):Observable<any> { 
    
    return this.http.post(this.baseApiUrl, file,httpOptions)
}
fileGet():Observable<any>{
  return this.http.get(this.baseApiUrl)
}
}