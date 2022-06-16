import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {RegistroUsuarioComponent} from './view/registro-usuario/registro-usuario.component';
import {EditarUsuarioComponent} from './view/editar-usuario/editar-usuario.component';
import { CiudadesComponent } from './view/ciudades/ciudades.component';
import { EmpresasComponent } from './view/empresas/empresas.component';
import { UsuariosComponent } from './view/usuarios/usuarios.component';
import { DashboardProveedorComponent } from './view/dashboard-proveedor/dashboard-proveedor.component';
import { RegistrarUsuarioAdminComponent } from './view/registrar-usuario-admin/registrar-usuario-admin.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registro-usuario', component:RegistroUsuarioComponent},
  {path: 'editar-usuario', component:EditarUsuarioComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'ciudades', component:CiudadesComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'empresas', component:EmpresasComponent},
  {path:'registrar-usuario-admin', component:RegistrarUsuarioAdminComponent},
  {path:'dashboardProveedor', component:DashboardProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,RegistroUsuarioComponent,EditarUsuarioComponent]
