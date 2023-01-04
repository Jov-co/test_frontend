import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form} from '@angular/forms'
import { ConsultaService } from '../../services/api/consulta.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor (private api:ConsultaService) {}

  onLogin(form:any){
    console.log(form)
  }
}
