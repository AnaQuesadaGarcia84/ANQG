import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis componentes
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { MostrarCursosComponent } from './mostrar-cursos/mostrar-cursos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'iniciar', component: IniciarComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso', component:CursoComponent},
  {path: 'editar-cursos', component: ListaCursosComponent},
  {path: 'mostrar-cursos', component: MostrarCursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
