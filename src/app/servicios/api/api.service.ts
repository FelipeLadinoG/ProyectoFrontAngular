import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import {LoginI} from 'src/app/modelos/login.inteface'
import { ResponceI } from 'src/app/modelos/response.interface';

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
  
}
