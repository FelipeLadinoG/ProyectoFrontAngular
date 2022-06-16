import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service'; 

import { ListaCiudadesI } from 'src/app/modelos/listaCiudades.interface';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  ciudades!: ListaCiudadesI[];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.listaCiudades(1).subscribe(datos => {
      console.log(datos)
      this.ciudades = datos;
    })
  }

}
