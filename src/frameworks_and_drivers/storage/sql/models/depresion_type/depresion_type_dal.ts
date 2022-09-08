export interface IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;
}

interface IOperators {
    [index: symbol]: any;
}

export interface IDepresionTypeFDAL {
    tipo_depresion?: string | IOperators;
    id?: number;
}

export class DepresionTypeDAL implements IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;

    constructor(item: IDepresionTypeDAL) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
    }
}
