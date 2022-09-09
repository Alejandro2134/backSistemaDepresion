export interface IDictionaryDAL {
    id?: string;
    termino: string;
    descripcion: string;
}

interface IOperators {
    [index: symbol]: any;
}

export interface IDictionaryFDAL {
    id?: number;
    termino?: string | IOperators;
    descripcion?: string | IOperators;
}

export class DictionaryDAL implements IDictionaryDAL {
    id?: string;
    termino: string;
    descripcion: string;

    constructor(item: IDictionaryDAL) {
        this.id = item.id;
        this.termino = item.termino;
        this.descripcion = item.descripcion;
    }
}
