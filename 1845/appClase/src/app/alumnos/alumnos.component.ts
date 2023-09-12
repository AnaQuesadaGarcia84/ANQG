import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { CursosService } from '../servicios/cursos.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [CursosService, MatCardModule]
})
export class AlumnosComponent implements OnInit {
  // public nombreProfesor: string;
  // public fotoProfesor: string;
  // public alumnosall: Array<alumnosBD>;
  // public correosEle: string[] = [];
  // public notaAlumno: number = 5;
  // public Nota: number = 0;
  // public registrado: boolean = false;

  // constructor(private _cursosService: CursosService) {
  //   this.alumnosall = new Array<alumnosBD>()
  //   this.nombreProfesor = profesorBase.nombre;
  //   this.fotoProfesor = profesorBase.foto;
  // }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  ngOnInit(): void {
    // this.alumnosall = this._cursosService.getAlumnos();
    // this.getcorreosEle();
  }

  // getcorreosEle() {
  //   this.alumnosall.forEach((alumno) => {
  //     this.correosEle.push(alumno.correoA);
  //   });
  //   console.log(this.correosEle);
  // }

  // setRegistrado() {
  //   this.registrado = true;
  // }

  // unsetRegistrado() {
  //   this.registrado = false;
  // }
}
