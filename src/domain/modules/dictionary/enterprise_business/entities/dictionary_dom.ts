export interface IDictionaryDOM {
    id?: string;
    termino: string;
    descripcion: string;
}

export interface IDictionaryFDOM {
    id?: number;
    termino?: string;
    descripcion?: string;
}

export class DictionaryDOM implements IDictionaryDOM {
    id?: string;
    termino: string;
    descripcion: string;

    constructor(item: IDictionaryDOM) {
        this.id = item.id;
        this.termino = item.termino;
        this.descripcion = item.descripcion;
    }

    updateDictionary(item: IDictionaryDOM) {
        this.descripcion = item?.descripcion;
        this.termino = item?.termino;
        return Object.freeze(this);
    }
}
