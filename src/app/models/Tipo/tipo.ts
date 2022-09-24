import { ITipo } from "../../interfaces/ITipo/ITipo";

export class Tipo implements ITipo{
    id: String;
    nombre: String;

    constructor(){
        this.id = '';
        this.nombre = '';
    }   
};