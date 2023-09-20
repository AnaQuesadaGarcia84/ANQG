import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../modelos/cursosModelos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  url= 'http://localhost:3700/api/cursos'

constructor() { }

}
