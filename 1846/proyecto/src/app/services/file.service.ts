import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseUrl= "http://localhost:3700/api/"

constructor(private http: HttpClient) { }

upload(formData: FormData): Observable<any> {
  return this.http.post<FormData>(`${this.baseUrl}/File/upload`, formData);
}

}//Cierre FILESERVICE
