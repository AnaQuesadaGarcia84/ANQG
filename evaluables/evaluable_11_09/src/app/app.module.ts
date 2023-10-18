import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './crearUsuario/crearUsuario.component';
import {CrearCursoComponent} from './crear-curso/crear-curso.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [		
    AppComponent,
      UsuariosComponent,
      CrearUsuarioComponent,
      CrearCursoComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
