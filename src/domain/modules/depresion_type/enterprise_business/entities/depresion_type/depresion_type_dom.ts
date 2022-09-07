export interface IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
}

export interface IDepresionTypeFDOM {
    id?: number;
    tipoDepresion?: string;
}

export class DepresionTypeDOM implements IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;

    constructor(item: IDepresionTypeDOM) {
        this.id = item.id;
        this.tipoDepresion = item.tipoDepresion;
    }

    updateDepresionType(item: IDepresionTypeDOM) {
        this.tipoDepresion = item?.tipoDepresion;
        return Object.freeze(this);
    }
}
