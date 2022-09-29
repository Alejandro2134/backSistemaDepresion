import { ISymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

export interface IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
    cantidadSintomas: number;
    /**Not logic params */
    symptoms?: ISymptomDOM[];
}

export interface IDepresionTypeFDOM {
    id?: number;
    tipoDepresion?: string;
    cantidadSintomas?: number;
    sintomasAsociados?: number[];
}

export class DepresionTypeDOM implements IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
    cantidadSintomas: number;
    /**Not logic params */
    symptoms?: ISymptomDOM[];

    constructor(item: IDepresionTypeDOM) {
        this.id = item.id;
        this.tipoDepresion = item.tipoDepresion;
        this.cantidadSintomas = item.cantidadSintomas;
    }

    updateDepresionType(item: IDepresionTypeDOM) {
        this.tipoDepresion = item?.tipoDepresion;
        this.cantidadSintomas = item?.cantidadSintomas;
        return Object.freeze(this);
    }
}
