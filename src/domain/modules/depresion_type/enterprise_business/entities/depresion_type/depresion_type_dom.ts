export interface IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
    cantidadSintomas: number;
}

export interface IDepresionTypeFDOM {
    id?: number;
    tipoDepresion?: string;
}

export class DepresionTypeDOM implements IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
    cantidadSintomas: number;

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
