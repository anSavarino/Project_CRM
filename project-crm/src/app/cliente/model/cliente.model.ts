export class Cliente {
    constructor(
        public id_Cliente:number,
        public nome_azienda:string,
        public referente_Aziendale:string,
        public categoria_Merceologica:string,
        public tipologia_Cliente:string,
        public utente_Associato:number
    
    ) {}
}