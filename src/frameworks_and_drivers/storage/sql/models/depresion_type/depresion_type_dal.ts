export interface IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;
    symptom_id?: number;
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
    symptom_id?: number;

    constructor(item: IDepresionTypeDAL) {
        this.tipo_depresion = item.tipo_depresion;
    }
}
