import { IPokemon } from "../../interfaces/IPokemon/IPokemon";

export class Pokemon implements IPokemon{
    id?: String;
    nombre: String;
    descripcion: String;
    ataques: [];
    imagen: String;
    tipo: String;

    

    constructor(){
        this.id = '';
        this.nombre = '';
        this.descripcion = '';
        this.ataques = [];
        this.imagen = '';
        this.tipo = '';
    }   
};

