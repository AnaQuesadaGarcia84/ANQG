import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuarioModelo';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url= 'http://localhost:3700/api/usuarios/'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(curso: UsuarioModel): Observable<any> {
    return this.http.post(this.url, curso);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, curso: UsuarioModel): Observable<any>{
    return this.http.put(this.url + id, curso)

  }


}
