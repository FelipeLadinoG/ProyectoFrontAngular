import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-proveedor.component.html',
  styleUrls: ['./dashboard-proveedor.component.css']
})
export class DashboardProveedorComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.listaUsuarios(1).subscribe(data =>
      console.log(data)
      )
  }



}