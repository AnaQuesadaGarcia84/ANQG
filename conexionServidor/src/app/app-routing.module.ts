import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis componentes
import { UsuarioComponent } from './usuario/usuario.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'cursos', component: CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
