import { IDepresionTypeAPI } from '@depresion_type/enterprise_business/dto/depresion_type_api';
export interface ISymptomAPI {
    id?: number;
    sintoma: string;
    tipos_depresion: number[];
    remover_tipos_depresion?: number[];
    /**Not logic params */
    depresion_types?: IDepresionTypeAPI[];
}

export class SymptomAPI implements ISymptomAPI {
    id?: number;
    sintoma: string;
    tipos_depresion: number[];
    remover_tipos_depresion?: number[];
    /**Not logic params */
    depresion_types?: IDepresionTypeAPI[];

    constructor(item: ISymptomAPI) {
        this.id = item.id;
        this.sintoma = item.sintoma;
        this.tipos_depresion = item.tipos_depresion;
        this.remover_tipos_depresion = item.remover_tipos_depresion;
    }
}
