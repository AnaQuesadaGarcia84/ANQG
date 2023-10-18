import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes de la aplicación
import { BuscadorComponent } from './buscador/buscador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ForoComponent } from './foro/foro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IlustracionComponent } from './ilustracion/ilustracion.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { IlustradorComponent } from './ilustrador/ilustrador.component';
import { IlustradoresComponent } from './ilustradores/ilustradores.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SubirObraComponent } from './subir-obra/subir-obra.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

const routes: Routes = [
  {path: 'buscador', component:BuscadorComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: 'foro', component:ForoComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'ilustracion', component:IlustracionComponent},
  {path: 'ilustraciones', component:IlustracionesComponent},
  {path: 'ilustrador', component:IlustradorComponent},
  {path: 'ilustradores', component:IlustradoresComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'subirObra', component:SubirObraComponent},
  {path: 'listaServicios', component:ListaServiciosComponent, 
    children:[{path: 'gestionServicios', component:GestionServiciosComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
