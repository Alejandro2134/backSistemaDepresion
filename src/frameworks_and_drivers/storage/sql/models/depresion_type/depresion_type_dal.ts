export interface IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
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
    cantidad_sintomas: number;

    constructor(item: IDepresionTypeDAL) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
        this.cantidad_sintomas = item.cantidad_sintomas;
    }
}
