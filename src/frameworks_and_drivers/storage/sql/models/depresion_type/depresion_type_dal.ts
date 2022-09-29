import { ISymptomDAL } from '../symptom/symptom_dal';

export interface IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
    /**Not logic params */
    symptoms?: ISymptomDAL[];
}

interface IOperators {
    [index: symbol]: any;
}

export interface IDepresionTypeFDAL {
    [index: string]: any;
    tipo_depresion?: string | IOperators;
    id?: number;
    cantidad_sintomas?: number | IOperators;
}

export class DepresionTypeDAL implements IDepresionTypeDAL {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
    /**Not logic params */
    symptoms?: ISymptomDAL[];

    constructor(item: IDepresionTypeDAL) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
        this.cantidad_sintomas = item.cantidad_sintomas;
    }
}
