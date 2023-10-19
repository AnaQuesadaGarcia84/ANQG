//Módulos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Módulos importados
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';


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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
