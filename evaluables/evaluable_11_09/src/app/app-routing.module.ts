import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './crearUsuario/crearUsuario.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'editarUsuario/:id', component: CrearUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
