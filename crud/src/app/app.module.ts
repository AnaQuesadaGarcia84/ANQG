import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Módulos de Angular
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Componente APP
import { AppComponent } from './app.component';

//Componentes
import { CrearPostComponent } from './componentes/crear-Post/crear-Post.component'; 
import { ListarPostsComponent } from './componentes/listar-Posts/listar-Posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearPostComponent,
    ListarPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
