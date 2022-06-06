import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {RegistroUsuarioComponent} from './view/registro-usuario/registro-usuario.component';
import {EditarUsuarioComponent} from './view/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registro-usuario', component:RegistroUsuarioComponent},
  {path: 'editar-usuario', component:EditarUsuarioComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,RegistroUsuarioComponent,EditarUsuarioComponent]
