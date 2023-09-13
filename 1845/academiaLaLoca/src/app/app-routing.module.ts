import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis componentes
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
