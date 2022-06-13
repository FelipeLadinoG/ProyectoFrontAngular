import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { RegisterI } from 'src/app/modelos/register.interface';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registerForm = new FormGroup({
    correo : new FormControl('',Validators.required),
    contrasena : new FormControl('', Validators.required),
    direccion : new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    telefono : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    
  }

  onRegister(form: RegisterI){
    this.api.register(form).subscribe(data=>{
      console.log(data)
    })
  }

}
