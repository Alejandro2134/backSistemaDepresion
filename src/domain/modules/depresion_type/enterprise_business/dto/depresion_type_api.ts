export interface IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;
}

export class DepresionTypeAPI implements IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;
    cantidad_sintomas: number;

    constructor(item: IDepresionTypeAPI) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
        this.cantidad_sintomas = item.cantidad_sintomas;
    }
}
