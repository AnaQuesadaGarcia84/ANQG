import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  //   baseUrl= "http://localhost:3700/api/"

  // constructor(private http: HttpClient) { }

  // upload(formData: FormData): Observable<any> {
  //   return this.http.post<FormData>(`${this.baseUrl}/File/upload`, formData);
  // }


  constructor(private http: HttpClient) {

  }

  public get(filename: string) {
    return this.http.get(filename); // GET  
  }

  public post(url: string, body: FormData) {
    return this.http.post(url, body); // POST  
  }
}//Cierre FILESERVICE
