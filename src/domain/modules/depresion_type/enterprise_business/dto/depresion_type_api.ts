interface IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;
}

export class DepresionTypeAPI implements IDepresionTypeAPI {
    id?: number;
    tipo_depresion: string;

    constructor(item: IDepresionTypeAPI) {
        this.id = item.id;
        this.tipo_depresion = item.tipo_depresion;
    }
}
