import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CiudadesComponent } from './view/ciudades/ciudades.component';
import { EmpresasComponent } from './view/empresas/empresas.component';
import { CuadrillasComponent } from './view/cuadrillas/cuadrillas.component';
import { EmpleadosComponent } from './view/empleados/empleados.component';
import { UsuariosComponent } from './view/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    CiudadesComponent,
    EmpresasComponent,
    CuadrillasComponent,
    EmpleadosComponent,
    UsuariosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
