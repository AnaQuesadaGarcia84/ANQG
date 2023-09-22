import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../modelos/usuariosModel';

@Injectable({
  providedIn: 'root'
})
export class Save_UsuarioService {

  public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = 'http://127.0.0.1:3700/';
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveUsuario(usuario: Usuario): Observable<any>{
		let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-usuario', params, {headers: headers});
	}

	getUsuarios(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'usuarios', {headers: headers});
	}

	getUsuario(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'usuario/'+id, {headers: headers});
	}

	deleteUsuario(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'usuario/'+id, {headers: headers});
	}

	updateUsuario(usuario: any): Observable<any>{
		let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'usuario/'+Usuario._id, params, {headers: headers});
	}


}
