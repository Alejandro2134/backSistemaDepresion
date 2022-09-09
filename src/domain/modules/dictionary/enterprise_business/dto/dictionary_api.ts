export interface IDictionaryAPI {
    id?: string;
    termino: string;
    descripcion: string;
}

export class DictionaryAPI implements IDictionaryAPI {
    id?: string;
    termino: string;
    descripcion: string;

    constructor(item: IDictionaryAPI) {
        this.id = item.id;
        this.termino = item.termino;
        this.descripcion = item.descripcion;
    }
}
