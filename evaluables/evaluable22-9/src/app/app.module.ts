import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [			
    AppComponent,
      CursoComponent,
      MensajeComponent,
      UsuarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
