import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-elenco-clienti',
  templateUrl: './elenco-clienti.component.html',
  styleUrl: './elenco-clienti.component.css'
})
export class ElencoClientiComponent implements OnInit{

listaClienti: Cliente[];

constructor(private clientiServ:ClienteService){}


ngOnInit(): void {
 this.clientiServ.getAllClienti().subscribe(clienti =>{
  this.listaClienti = clienti;
 });
}
}
