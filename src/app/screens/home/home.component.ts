import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form} from '@angular/forms'
import { ConsultaService } from '../../services/api/consulta.service'
import { SearchI } from '../../models/search.interface'
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchForm = new FormGroup({
    name : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    identificationNumber : new FormControl('', Validators.required)
  })
  public load:boolean;


  constructor (private api:ConsultaService, private router:Router) {
    this.load = false;
  }

  onSearch(form:any){
    this.load = true;
    this.api.onSearch(form).subscribe(data => {
      console.log(data)
      localStorage.setItem("resultado",JSON.stringify(data))
      this.router.navigate(["result"])
    })
    console.log(form)
  }
}
