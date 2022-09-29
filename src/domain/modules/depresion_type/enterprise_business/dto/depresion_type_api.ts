import { ISymptomAPI } from "@symptoms/enterprise_business/dto/symptom_api";

export interface IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
    /**Not logic params */
    symptoms?: ISymptomAPI[];
}

export class DepresionTypeAPI implements IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
    /**Not logic params */
    symptoms?: ISymptomAPI[];

    constructor(item: IDepresionTypeAPI) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
        this.cantidad_sintomas = item.cantidad_sintomas;
    }
}
