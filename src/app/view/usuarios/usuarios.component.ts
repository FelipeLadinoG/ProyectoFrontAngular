import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service'; 

import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios!: ListaUsuariosI[];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.listaUsuarios(1).subscribe(datos => {
      console.log(datos)
      this.usuarios = datos;
    })
  }

}
