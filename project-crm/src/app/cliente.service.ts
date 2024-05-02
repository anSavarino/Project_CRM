import { Injectable } from '@angular/core';
import { Cliente } from './cliente/model/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL: string = "http://localhost:9066/api/clienti"

  listaClienti: Cliente[] = [
    
  ]

  constructor(private httpServ: HttpClient) { }

  getAllClienti(){
 return this.httpServ.get<Cliente[]>(this.URL);

   }


  } 

