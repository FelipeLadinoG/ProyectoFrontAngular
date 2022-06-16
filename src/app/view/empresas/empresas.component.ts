import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service'; 

import { ListaEmpresasI } from 'src/app/modelos/listaEmpresas.interface';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas!: ListaEmpresasI[];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.listaEmpresas(1).subscribe(datos => {
      console.log(datos)
      this.empresas = datos;
    })
  }

}
