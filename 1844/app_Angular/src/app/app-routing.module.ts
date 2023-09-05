import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccesoComponent } from './acceso/acceso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'acceso', component:AccesoComponent},
  {path:  'alumnos', component:AlumnosComponent},
  {path:  'alumno', component:AlumnoComponent},
  {path:  'consulta', component:ConsultaComponent},
  {path:  'curso', component:CursoComponent},
  {path:  'cursos', component:CursosComponent},
  {path:  'profesor', component:ProfesorComponent},
  {path:  'profesores', component:ProfesoresComponent},
  {path:  'registro', component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
