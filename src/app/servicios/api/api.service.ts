import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import {LoginI} from 'src/app/modelos/login.inteface'
import { RegisterI } from 'src/app/modelos/register.interface';
import { ResponceI } from 'src/app/modelos/response.interface';
import { EditarUsuarioI } from 'src/app/modelos/editarUsuario.interface';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { ListaCiudadesI } from 'src/app/modelos/listaCiudades.interface';
import { ListaEmpresasI } from 'src/app/modelos/listaEmpresas.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'http://localhost:8085/'
  constructor(private http:HttpClient) { }

  login(datos:LoginI):Observable<ResponceI>{ 
    console.log(datos);
    let direccion = this.url + "api/auth/login";
    return this.http.post<ResponceI>(direccion, datos);
  }

  register(datos:RegisterI):Observable<ResponceI>{
    console.log(datos);
    let direccion = this.url + "api/auth/register";
    return this.http.post<ResponceI>(direccion, datos);
  }

  editarUsuario(datos:EditarUsuarioI):Observable<ResponceI>{
    console.log(datos);
    let direccion = this.url + "api/auth/editarUsuario";
    return this.http.post<ResponceI>(direccion,datos);
  }

  listaUsuarios(page:number):Observable<ListaUsuariosI[]>{
    let direccion = this.url + "api/usuarios";
    return this.http.get<ListaUsuariosI[]>(direccion);
  }

  listaCiudades(page:number):Observable<ListaCiudadesI[]>{
    let direccion = this.url + "api/ciudad/ciudades";
    return this.http.get<ListaCiudadesI[]>(direccion);
  }

  listaEmpresas(page:number):Observable<ListaEmpresasI[]>{
    let direccion = this.url + "api/empresaProveedora/EmpresaProveedoras";
    return this.http.get<ListaEmpresasI[]>(direccion);
  }
  
  
}
