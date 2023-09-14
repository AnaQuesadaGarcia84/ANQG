import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis componentes
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarComponent } from './iniciar/iniciar.component';


const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'iniciar', component: IniciarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
