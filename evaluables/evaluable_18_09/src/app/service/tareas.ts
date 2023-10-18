import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tareas } from '../models/tareas';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url= 'http://localhost:3700/'

  constructor(private http: HttpClient) { }

  getTareas(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarTareas(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarTareas(tarea: Tareas): Observable<any> {
    return this.http.post(this.url, tarea);
  }

  obtenerTareas(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTareas(id: string, tarea: Tareas): Observable<any>{
    return this.http.put(this.url + id, tarea)

  }
}
