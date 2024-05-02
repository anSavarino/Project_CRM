export class Utente{
    constructor(
        public ID_Utente: number,
        public Nome_Utente: string,
	    public Ruolo:  string,
        public  Email: string,
        public  Password: string,
        public  Data_Registrazione: Date
    ) { }
}