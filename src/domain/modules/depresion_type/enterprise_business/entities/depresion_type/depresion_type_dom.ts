export interface IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;
}

export interface IDepresionTypeFDOM {
    tipoDepresion?: string;
}

export class DepresionTypeDOM implements IDepresionTypeDOM {
    id?: number;
    tipoDepresion: string;

    constructor(item: IDepresionTypeDOM) {
        this.tipoDepresion = item.tipoDepresion;
    }
}
