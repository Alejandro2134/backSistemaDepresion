import { IDepresionTypeDAL } from '../depresion_type/depresion_type_dal';

export interface ISymptomDAL {
    id?: number;
    sintoma: string;
    tipos_depresion: number[];
    /**Not logic params */
    depresion_types?: IDepresionTypeDAL[];
}

interface IOperators {
    [index: symbol]: any;
}

export interface ISymptomFDAL {
    sintoma?: string | IOperators;
}

export class SymptomDAL implements ISymptomDAL {
    id?: number;
    sintoma: string;
    tipos_depresion: number[];
    /**Not logic params */
    depresion_types?: IDepresionTypeDAL[];

    constructor(item: ISymptomDAL) {
        this.id = item.id;
        this.sintoma = item.sintoma;
        this.tipos_depresion = item.tipos_depresion;
    }
}
