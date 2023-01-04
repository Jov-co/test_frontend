import { Injectable } from '@angular/core';
import { SearchI } from '../../models/search.interface'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs'
import { ListaResultado } from '../../models/listaResultado.interface'

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url:string = "https://fincompapi.herokuapp.com/"
  constructor(private http:HttpClient) { }

  onSearch(form:SearchI):Observable<ListaResultado[]>{
    let urlConnect = this.url + "search/find";
    return this.http.post<ListaResultado[]>(urlConnect,form);
  }
}
