import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListarPostsComponent } from './componentes/listar-Posts/listar-Posts.component';
import { CrearPostComponent } from './componentes/crear-Post/crear-Post.component';

const routes: Routes = [
  {path: '', component: ListarPostsComponent},
  {path: 'listar-posts', component: ListarPostsComponent},
  {path: 'crear-post', component: CrearPostComponent},
  {path: 'editar-post/:id', component: CrearPostComponent},
  {path: 'eliminar-post/:id', component: ListarPostsComponent},

  
  //Esto nos sirve para que si se pone una ruta equivocada o que no existe nos devualva al home
  //Debe ubicarse al final de las rutas de direccionamiento
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
