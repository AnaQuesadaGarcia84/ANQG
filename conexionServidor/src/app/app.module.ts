import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [			
    AppComponent,
      CursosComponent,
      UsuarioComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
