export interface IDepresionTypeDAL {
    id?: number;
    depresion_type: string;
}

export class DepresionTypeDAL implements IDepresionTypeDAL {
    id?: number;
    depresion_type: string;

    constructor(item: IDepresionTypeDAL) {
        this.depresion_type = item.depresion_type;
    }
}