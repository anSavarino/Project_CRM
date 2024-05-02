import { Injectable } from '@angular/core';
import { Utente } from './utente/model/utente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  URL: string = 'http://localhost:9019/api/utenti';


  listaUtenti: Utente[] = [];
  constructor(private httpServ: HttpClient) { }

  getAllUtenti(){
    return this.httpServ.get<Utente[]>(this.URL);
  }
}
