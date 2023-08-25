import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { ForoComponent } from './foro/foro.component';
import { IlustradoresComponent } from './ilustradores/ilustradores.component';
import { IlustradorComponent } from './ilustrador/ilustrador.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IlustracionComponent } from './ilustracion/ilustracion.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HeaderComponent } from './header/header.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SubirObraComponent } from './subir-obra/subir-obra.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    SesionComponent,
    ForoComponent,
    IlustradoresComponent,
    IlustradorComponent,
    GaleriaComponent,
    IlustracionComponent,
    BuscadorComponent,
    CarritoComponent,
    HeaderComponent,
    IlustracionesComponent,
    ContactoComponent,
    SubirObraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
