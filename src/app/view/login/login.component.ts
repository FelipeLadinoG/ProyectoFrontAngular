import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.inteface';
import { Router } from '@angular/router';
import { ResponceI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form: LoginI){
    this.api.login(form).subscribe(data=>{
      let dataResponse:ResponceI = data;
      console.log(data)
      if (data.token == "Credenciales incorrectas"){
        alert(data.token)
      } else{
        alert("Exitoso")
        localStorage.setItem("token",data.token);
        location.href="dashboard"
      }
    })
  }

}
